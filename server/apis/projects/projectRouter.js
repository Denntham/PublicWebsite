//ExpressJS
const router = require('express').Router();
const { validationResult } = require('express-validator');

//Schema
const {Project} = require('../../models/projectModel');
const mongoose = require('mongoose');

//Auth
const isProfessional = require('../middlewares/isProfessional');
const isProjectOwner = require('../middlewares/isProjectOwner');
const { newProjectValidation, editProjectValidation } = require('./projectValidation');

const upload = require('../middlewares/file-storages/project-image');
const conn = mongoose.connection;
let gfs;
conn.once('open', () => {
    //initialize our stream
    gfs = new mongoose.mongo.GridFSBucket(conn.db, {
        bucketName: 'projects'
    });
});
//PROJECT STATUS CODE
//0: PENDING
//1: ACTIVE
//2: REJECTED
//3: ARCHIVED/INACTIVE

const errorFormatter = ({ location, msg, param }) => {
    return `[${param}]: ${msg}`;
};

//CREATE
router.post('/newproject', [isProfessional, newProjectValidation], async (req, res) => {
    try {
        const currentUser = req.user;
        const {name, location, description, price, designStyle, 
            buildingType, year, category, projectStatus, city, province} = req.body;
        
        const errors = validationResult(req).formatWith(errorFormatter);
        if(!errors.isEmpty()){ return res.status(422).json({errorMessage: errors.array()})};
        
        const newProject = new Project({
            name: name,
            location: location,
            city: city,
            province: province,
            description: description,
            uploader: currentUser.username,
            buildingType: buildingType,
            year: year,
            price: price,
            projectStatus: projectStatus,
            designStyle: designStyle, 
            category: category,
            leads: 0,
            status: 0
        });

        await newProject.save().then((proj) => {
            return res.status(200).json({message: 'Project berhasil diupload untuk direview', id: proj._id});
        }).catch((error) => {return res.status(500).json({error})});
    } catch (error) {
        console.log(error);
        return res.status(500).json({errorMessage: error.message});
    }
});

//READ
router.get('/', async(req, res) => {
    try {
        //Only get projects that has been approved
        const projects = await Project.find({status: 1, $and: [ req.query ]});
        if(!projects) return res.status(404).json({errorMessage: 'Tidak ada projek untuk saat ini, silahkan tambahkan projek baru!'});

        res.status(200).json(projects);
    } catch (error) {
        console.log(error);
        return res.status(500).json({errorMessage: error.message});
    }
})

//IF THE NEXT 3 FUNCTION GETS BLOATED, TURN THEM INTO ONE
//SEPARATED INTO 3 FOR SIMPLICITY 

//Get all of the user's project's
router.get('/myprojects/active', isProfessional, async(req, res) => {
    try {
        console.log(req.user.username);
        const projects = await Project.find({uploader: req.user.username, status: 1});
        if(projects.length === 0) return res.status(404).json({errorMessage: 'Tidak ada projek untuk saat ini, silahkan tambahkan projek baru!'});
        console.log(projects);
        res.status(200).json(projects);
    } catch (error) {
        console.log(error);
        return res.status(500).json({errorMessage: error.message});
    }
})

router.get('/myprojects/:statusCode', isProfessional, async(req, res) => {
    try {
        const projects = await Project.find({uploader: req.user.username, status: req.params.statusCode});
        if(projects.length === 0) return res.status(404).json({errorMessage: 'Tidak ada projek untuk saat ini, silahkan tambahkan projek baru!'});
        res.status(200).json(projects);
    } catch (error) {
        console.log(error);
        return res.status(500).json({errorMessage: error.message});
    }
})



//Get all of the user's rejected project's
router.get('/myprojects/rejected', isProfessional, async(req, res) => {
    try {
        const projects = await Project.find({uploader: req.user.username, status: 2});
        if(projects.length === 0) return res.status(404).json({errorMessage: 'Halaman ini kosong'});
        
        res.status(200).json(projects);
    } catch (error) {
        console.log(error);
        return res.status(500).json({errorMessage: error.message});
    }
})

//Get all of the user's archived project's
router.get('/myprojects/pending', isProfessional, async(req, res) => {
    try {
        const projects = await Project.find({uploader: req.user.username, status: 0});
        if(projects.length === 0) return res.status(404).json({errorMessage: 'Archive anda kosong'});
        
        res.status(200).json(projects);
    } catch (error) {
        console.log(error);
        return res.status(500).json({errorMessage: error.message});
    }
})

//Get all active projects from a username
router.get('/all/:username', async(req,res)=>{
    try {
        const projects = await Project.find({uploader: req.params.username, status: 1});
        if(projects.length === 0) return res.status(404).json({errorMessage: 'User ini belum menambahkan projek'});

        res.status(200).json(projects);
    } catch (error) {
        console.log(error);
        return res.status(500).json({errorMessage: error.message});
    }
})

router.get('/test', async(req, res) => {
    try {
        //Only get projects that has been approved
        console.log(req.query);
        const projects = await Project.find({status: 1, $and: [ req.query ]});
        if(!projects) return res.status(404).json({errorMessage: 'Tidak ada projek untuk saat ini, silahkan tambahkan projek baru!'});

        res.status(200).json(projects);
    } catch (error) {
        console.log(error);
        return res.status(500).json({errorMessage: error.message});
    }
})

//Get individual project info
router.get('/:projectID', async(req, res) => {
    try {
        const project = await Project.findOne({_id: req.params.projectID});
        if(!project) return res.status(404).json({errorMessage: 'Projek tidak ditemukan'});

        res.status(200).json(project);
    } catch (error) {
        console.log(error);
        return res.status(500).json({errorMessage: error.message});
    }
})

//Update
router.put('/edit/:projectID', [isProjectOwner, editProjectValidation], async (req,res) => {
    try {
        const project = await Project.findOne({_id: new mongoose.Types.ObjectId(req.params.projectID)});
        if(!project) return res.status(404).json({errorMessage: 'Projek tidak ditemukan'});
    
        const inputs = req.body;
        if(!inputs) return res.status(200).json({message: 'Tidak ada data yang dirubah'});

        if(inputs.name) project.name = inputs.name;
        if(inputs.location) project.location = inputs.location;
        if(inputs.city) project.city = inputs.city;
        if(inputs.province) project.province = inputs.province;
        if(inputs.description) project.description = inputs.description;
        if(inputs.designStyle) project.designStyle = inputs.designStyle;
        if(inputs.buildingType) project.buildingType = inputs.buildingType;
        if(inputs.category) project.category = inputs.category;
        if(inputs.price) project.price = inputs.price;
        if(inputs.year) project.year = inputs.year;
        if(inputs.projectStatus) project.projectStatus = inputs.projectStatus;


        await project.save().then(() => {
            return res.status(200).json({message: 'Project berhasil diupdate'});
        }).catch((error) => {return res.status(500).json({error})});
    } catch (error) {
        console.log(error);
        return res.status(500).json({errorMessage: error.message});
    }
})

//Delete
router.delete('/delete/:projectID', isProjectOwner, async(req,res) => {
    try{
        const projectToDelete = await Project.findOne({_id: req.params.projectID});
        if(!projectToDelete) return res.status(404).json({errorMessage: 'Projek tidak ditemukan'});

        if(projectToDelete.photosIDs.length > 0){
            for(let i=0;i<projectToDelete.photosIDs.length;i++){
                console.log(`Deleting image #${i}...`);
                await gfs.delete(new mongoose.Types.ObjectId(projectToDelete.photosIDs[i]));
            }
        }

        await Project.findOneAndDelete({_id: projectToDelete._id});
        return res.status(200).json({message: 'Project berhasil dihapus'});
    } catch(error) {
        console.log(error);
        return res.status(500).json({errorMessage: error.message});
    }
})

module.exports = router;