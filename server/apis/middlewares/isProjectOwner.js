const jwt = require("jsonwebtoken");
const {generateAccessToken} = require('../middlewares/helpers/token-helper');
const {Project} = require('../../models/projectModel');
const {checkPermission} = require('../../models/permissionList');
const mongoose = require('mongoose');

async function isProjectOwner(req,res,next){
    try {
        //Take user id's jsonwebtoken and verify its source
        let token = req.cookies.token;

        //Verify token
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        verifyAndSendToken(req,res,next, verified);
    } catch (error) {
        console.log(error);
        return res.status(500).json({errorMessage: error.message});
    }
}

function verifyAndSendToken(req,res,next,tokenContent){
    try{
        Project.findOne({_id: new mongoose.Types.ObjectId(req.params.projectID)}, (err, project) => {
            if(!project) return res.status(404).json({errorMessage: 'Project tidak ditemukan'});
            if(err) throw err;
            
            if(project.uploader === tokenContent.username || checkPermission(tokenContent.permission, 2)) {
                req.user = tokenContent;
                next();
            } else {
                return res.status(401).json({errorMessage: 'Anda tidak memiliki izin untuk merubah projek ini'});
            }
        });
    } catch (error) {
        //If error occured then catch and prevent server crash
        console.log(error);
        return res.status(500).json({errorMessage: error.message});
    }
}

module.exports = isProjectOwner;