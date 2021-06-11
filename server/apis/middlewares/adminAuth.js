const jwt = require("jsonwebtoken");
const {generateAccessToken, refreshTokenWithPerm} = require('../middlewares/helpers/token-helper');
const User = require('../../models/userModel');
const {checkPermission} = require('../../models/permissionList');

//Middleware for access authentication
function isAdmin(req,res,next){
    try {
        //Take user id's jsonwebtoken and verify its source
        let token = req.cookies.token;

        //Refresh token
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        if(!verified || !token) throw ('Refreshing');
        //Permission checking
         //User harus memiliki tingkat akses di atas kode permission 1
        const hasPermission = checkPermission(verified.permission, 2);
            
        if(hasPermission){
            sendAdminToken(req,res,next,verified);
        } else {
            return res.status(401).json({errorMessage: 'Anda dilarang untuk melakukan akses ini!'})
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({errorMessage: error.message});
    }
}

function sendAdminToken(req,res,next,tokenContent){
    try {
        //Check with the server/database to make sure that access is valid and not modified
        User.findOne({username: tokenContent.username, permission: 2}, (err, user) => {
            if(err) throw err;

            if(!user) return res.status(404).json({errorMessage: 'Token modifikasi telah terdeteksi! Akses dilarang!'});
            req.user = tokenContent;
            next();
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({errorMessage: error.message});
    }
}

module.exports = isAdmin;