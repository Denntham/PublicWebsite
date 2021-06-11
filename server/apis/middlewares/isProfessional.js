const jwt = require("jsonwebtoken");
const {checkPermission} = require('../../models/permissionList');

//Middleware for access authentication
function isProfessional(req,res,next){
    const minPermission = 1;
    try {
        //Take user id's jsonwebtoken and verify its source
        let token = req.cookies.token;

        //Refresh token
        const verified = jwt.verify(token, process.env.JWT_SECRET);
            
        //Permission checking
        //User harus memiliki tingkat akses di atas kode permission 1
        const hasPermission = checkPermission(verified.permission, minPermission);

        //If an approved professional then refresh token
        if(hasPermission){
            req.user = verified;
            next();
        } else {
            //Else return unauthorized access error
            return res.status(401).json({errorMessage: 'Akses tidak di izinkan'});
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({errorMessage: error.message});
    }
}

module.exports = isProfessional;