const router = require('express').Router();
const isAdmin = require('../middlewares/adminAuth');
const mongoose = require('mongoose');

const User = require('../../models/userModel');
const {Project} = require('../../models/projectModel');


//Approve projects
//Can also be used to remove project after it's been approved
router.post('/handle/:projectID', isAdmin, async(req,res) => {
    try {
        const project = await Project.findOne({_id: new mongoose.Types.ObjectId(req.params.projectID)});
        if(!project) return res.status(404).json({errorMessage: 'Project tidak ditemukan'});
        
        const inputs = req.body;
        if(inputs.status > 2) return res.status(401).json({errorMessage: 'Status code out of bound'});

        if(inputs.status === 2){
            if(inputs.rejectedMessage === '') return res.status(401).json({errorMessage: 'Anda harus memasukkan alasan untuk reject projek ini'});
            project.rejectedMessage = inputs.rejectedMessage;
        }
        project.status = inputs.status && inputs.status > 0 && inputs.status < 3 ? inputs.status : 0;

        await project.save();
        const decision = inputs.status === 1 ? 'di approve' : 'di reject';
        res.status(200).json({message: `Project telah ${decision}`});
    } catch (error) {
        console.log(error);
        return res.status(500).json({errorMessage: error.message});
    }
});

router.get('/requests', isAdmin, async(req,res) => {
    try {
        const projects = await Project.find({status: 0});
        if(!projects) return res.status(404).json({errorMessage: 'Request project saat ini masih kosong'});

        return res.status(200).json(projects);
    } catch (error) {
        console.log(error);
        return res.status(500).json({errorMessage: error.message});
    }
})

//Perform user management commands later
router.get('/listusers', isAdmin, async(req,res) => {
    try {
        const users = await User.find();
        if(!users) return res.status(404).json({errorMessage: 'Tidak ada user untuk saat ini'});

        res.status(200).json(users);
    } catch (error) {
        console.log(error);
        return res.status(500).json({errorMessage: error.message});
    }
});

module.exports = router;