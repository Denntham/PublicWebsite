const jwt = require("jsonwebtoken");

function getLoggedIn(req,res,next){
    try{
        let token = req.cookies.token;
        //Refresh token
        const verified = jwt.verify(token, process.env.JWT_SECRET);
    
        req.user = verified;
        next();
    } catch (error) {
        return res.status(500).json({errorMessage: error.message});
    }
}

module.exports = getLoggedIn;