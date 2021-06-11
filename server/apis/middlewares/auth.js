const jwt = require("jsonwebtoken");
const {generateAccessToken, refreshToken} = require('../middlewares/helpers/token-helper');

//Middleware for access authentication
function auth(req,res,next){
    try{
        let token = req.cookies.token;
        //Refresh token
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        token = generateAccessToken(verified);
    
        req.user = verified;
        res.cookie("token", token, {
            httpOnly: true
        });
    
        next();
    } catch (error) {
        return res.status(500).json({errorMessage: error.message});
    }
}


module.exports = auth;