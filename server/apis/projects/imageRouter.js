const router = require("express").Router();
const {Project} = require("../../models/projectModel");
const mongoose = require('mongoose');

const isProjectOwner = require('../middlewares/isProjectOwner');
const upload = require('../middlewares/file-storages/project-image');

const conn = mongoose.connection;
let gfs;
conn.once('open', () => {
    //initialize our stream
    gfs = new mongoose.mongo.GridFSBucket(conn.db, {
        bucketName: 'projects'
    });
});

router.post('/upload/v2/:projectID', [isProjectOwner, upload.array('file', 10)], async(req,res) => {
    try {
        if(req.files.length === 0) return res.status(400).json({errorMessage: 'Tidak ada file yang diunggah'});
        const existingProject = await Project.findOne({_id: new mongoose.Types.ObjectId(req.params.projectID)});
        if(!existingProject) return res.status(404).json({errorMessage: 'Project tersebut tidak ditemukan'});
        if(existingProject.photosIDs.length >= 10) throw 'Hanya dibolehkan 10 foto per projek, silahkan hapus beberapa foto terlebih dahulu';

        //Contain the current images that are being used
        //If the project has images then set the images otherwise set the photosIDs as an empty array
        let photosIDs = existingProject.photosIDs.length > 0 ? existingProject.photosIDs : [];
        
        //Push the list of currently used images into the photosIDs array
        for(let i=0;i<req.files.length;i++){
            if(photosIDs.length >= 10) {break;}
            console.log(`Photo #${i} telah ditambahkan`);
            photosIDs.push(req.files[i].id);
        }

        existingProject.photosIDs = photosIDs;
        await existingProject.save();

        res.status(200).json({message: `${photosIDs.length} foto telah berhasil diunggah`});
    } catch (error) {
        console.log(error);
        
        if(req.files.length > 0){
            req.files.forEach(function(file){
                try{
                    gfs.delete(file.id);
                } catch(error) {
                    console.log(error);
                }
            })
        }
        return res.status(500).json({errorMessage: error.message});
    }
})

router.post('/upload/:projectID', [isProjectOwner, upload.array('file', 10)], async(req,res) => {
    try {
        const existingProject = await Project.findOne({_id: new mongoose.Types.ObjectId(req.params.projectID)});
        if(!existingProject) return res.status(404).json({errorMessage: 'Project tersebut tidak ditemukan'});
        
        //Contain the current images that are being used
        let photosIDs = []

        //Loop through the old photosIDs array of the project
        if(existingProject.photosIDs.length > 0){
            //If photo is not in use anymore then delete
            existingProject.photosIDs.forEach(function(photoID, idx){
                console.log(`Foto #${idx + 1} telah berhasil di hapus`);
                gfs.delete(photoID);
            });
        };

        //Push the list of currently used images into the photosIDs array
        if(req.files.length === 0) return res.status(400).json({errorMessage: 'Tidak ada file yang diunggah'});
            req.files.forEach(function(file, idx){
                console.log(`Photo #${idx + 1} telah ditambahkan`);
                photosIDs.push(file.id);
        });

        existingProject.photosIDs = photosIDs;
        await existingProject.save();

        res.status(200).json({message: `${photosIDs.length} foto telah berhasil diunggah`});
    } catch (error) {
        console.log(error);
        
        if(req.files.length > 0){
            req.files.forEach(function(file){
                try{
                    gfs.delete(file.id);
                } catch(error) {
                    console.log(error);
                }
            })
        }
        return res.status(500).json({errorMessage: error.message});
    }
})

router.get('/thumbnail/:projectID', async(req,res) => {
    try {
        const existingProject = await Project.findOne({_id: new mongoose.Types.ObjectId(req.params.projectID)});
        if(!existingProject) return res.status(404).json({errorMessage: 'Project tersebut tidak ditemukan'});

        if(existingProject.photosIDs.length === 0) return res.status(404).json({imageNotFound: true})
        
        //Take first image as thumbnail
        const thumb = await gfs.find(existingProject.photosIDs[0]).toArray();
        const readStream = gfs.openDownloadStreamByName(thumb[0].filename);   
        res.setHeader("Content-Type", thumb[0].contentType);
        return readStream.pipe(res);

    } catch (error) {
        console.log(error);
        return res.status(500).json({errorMessage: error.message});
    }
});

router.get('/render/:imageID', async(req,res) => {
    try {
        gfs.find({_id: new mongoose.Types.ObjectId(req.params.imageID)}).toArray((err, files) => {
            if(err) throw err;

            if(!files[0] || files.length === 0) return res.status(404).json({errorMessage: 'Foto tersebut tidak ditemukan'});

            const readStream = gfs.openDownloadStreamByName(files[0].filename);   
            res.setHeader("Content-Type", files[0].contentType);
            return readStream.pipe(res);
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({errorMessage: error.message});
    }
});

router.delete('/delete/:projectID/:imageID', isProjectOwner, async(req,res) => {
    try {
        const project = await Project.findOne({_id: new mongoose.Types.ObjectId(req.params.projectID)})
        const imageid = new mongoose.Types.ObjectId(req.params.imageID);
        
        const elementPos = project.photosIDs.findIndex(img => String(img) === String(imageid));
        project.photosIDs.splice(elementPos, 1);  
        await gfs.delete(imageid);

        await project.save();
        return res.status(200).json({message: 'Foto berhasil dihapus'});    
    } catch (error) {
        console.log(error);
        return res.status(500).json({errorMessage: error.message});
    }
})

module.exports = router;