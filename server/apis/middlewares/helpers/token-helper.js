const jwt = require("jsonwebtoken");
const {checkPermission} = require('../../../models/permissionList');
const User = require('../../../models/userModel');


function generateAccessToken(input){
    delete input.iat;
    delete input.exp;
    return jwt.sign(input, process.env.JWT_SECRET, {expiresIn: process.env.accessTokenLife});
}

function refreshToken(req, res, next){
    client.get('refreshToken', (err, refreshToken) => {
        if(refreshToken){
            try{
                //Get content of refreshToken from cache
                const refreshTokenContent = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);
            
                //Make new access token
                token = generateAccessToken(refreshTokenContent);
                req.user = refreshTokenContent;
                res.cookie("token", token, { httpOnly: true });

                console.log('Token refreshed');
                //Send to server
                next();
            } catch (error) {
                //If error occured then catch and prevent server crash
                console.log(error);
                return res.status(500).json({errorMessage: error.message});
            }
        } else {
            //If refresh token doesn't exist (AKA Expired) then leave
            return res.status(401).json({errorMessage: 'Silahkan login ulang'});
        }
    });
}

function getLoggedIn(req,res,next){
    client.get('refreshToken', (err, refreshToken) => {
        if(refreshToken){
            try{
                //Get content of refreshToken from cache
                const refreshTokenContent = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);
            
                //Make new access token
                token = generateAccessToken(refreshTokenContent);
                req.user = refreshTokenContent;
                res.cookie("token", token, { httpOnly: true });

                console.log('Token refreshed');
                //Send to server
                next();
            } catch (error) {
                //If error occured then catch and prevent server crash
                req.user = null;
                next();
            }
        } else {
            //If refresh token doesn't exist (AKA Expired) then leave
            req.user = null;
            next();
        }
    });
}

//To refresh tokens and check permission first
function refreshTokenWithPerm(req,res,next, minPermission, serverCheck=false){
    
    //Get refresh token from cache
    client.get('refreshToken', (err, refreshToken) => {
        if(refreshToken){
            try{
                //Get content of refreshToken from cache
                const refreshTokenContent = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);

                //Check if user's permission fills the rminimum permission requirement
                const hasPermission = checkPermission(refreshTokenContent.permission, minPermission);
                    
                //If the user has permission and the access does not require server check
                if(hasPermission && !serverCheck){
                    token = generateAccessToken(refreshTokenContent);
                    
                    //Refresh token
                    console.log('Token refreshed with permission approved');
                    req.user = refreshTokenContent;
                    res.cookie("token", token, {httpOnly: true});
                    next();
                }
                
                //If user has permission and server check is required then user's data is compared to the database data
                if(hasPermission && serverCheck){
                    serverVerification(req,res,next,refreshTokenContent, minPermission);
                } 
                
                //If no permission then return error
                if(!hasPermission){
                    //Else return unauthorized access error
                    return res.status(401).json({errorMessage: 'Akses tidak di izinkan'});
                }
            } catch (error) {
                //If error occured then catch and prevent server crash
                console.log(error);
                return res.status(500).json({errorMessage: error.message});
            }
        } else {
            //If refresh token doesn't exist (AKA Expired) then leave
            return res.status(401).json({errorMessage: 'Silahkan login ulang'});
        }
    });
}

//Verify the refreshed token with the database
function serverVerification(req,res,next, refreshTokenContent, reqPermission){
    try {
        //Check with the server/database to make sure that access is valid and not modified
        //Queries for a user with the same username AND the permission

        //TODO: Might need to modify in the future, this only works to check for admin at the moment
        User.findOne({username: refreshTokenContent.username, permission: reqPermission}, (err, user) => {
            //If the user's token permission does not match the server, then return error (TODO: Implement notify admin in the future)
            //If it does not match, it means a breach has been discovered

            if(!user) return res.status(404).json({errorMessage: 'Token modifikasi telah terdeteksi! Akses dilarang!'});
            
            console.log('Token refreshed with server verification');

            //Refresh token if okay
            const token = generateAccessToken(refreshTokenContent);
            req.user = refreshTokenContent;
            res.cookie("token", token, {
                httpOnly: true
            });
            next();
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({errorMessage: error.message});
    }
}

module.exports = {generateAccessToken, refreshToken, refreshTokenWithPerm, getLoggedIn};