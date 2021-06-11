const router = require("express").Router();
const User = require("../../models/userModel");
const mongoose = require('mongoose');

const auth = require("../middlewares/auth");
const upload = require('../middlewares/file-storages/avatar-storage');

const conn = mongoose.connection;
let gfs;
conn.once('open', () => {
    //initialize our stream
    gfs = new mongoose.mongo.GridFSBucket(conn.db, {
        bucketName: 'avatars'
    });
});

//Image handlers
router.post('/upload', [auth, upload.single('file')], async (req, res) => {
    try {
        //Get current user information
        const currentUser = await User.findOne({username: req.user.username});
        if(!currentUser) return res.status(404).json({errorMessage: 'User tidak ditemukan'});

        //If user already has an image then delete it
        if(currentUser.avatarId){
            gfs.delete(new mongoose.Types.ObjectId(currentUser.avatarId));
        }

        //Set the new avatar id
        currentUser.avatarId = req.file.id;
        await currentUser.save();
        
        return res.status(200).json({message: 'Image ID: ' + String(req.file.id)});
    } catch (error) {
        console.log(error);
        return res.status(500).json({errorMessage: error.message});
    }
});

router.get('/render/:username', async(req,res) => {
    try {
        gfs.find({"metadata.username": req.params.username}).toArray((err, image) => {
            if(err) throw err;
            if(!image[0] || image.length === 0) return res.status(404).json({errorMessage: 'Foto tersebut tidak ditemukan'});

            const readStream = gfs.openDownloadStreamByName(image[0].filename);   
            res.setHeader("Content-Type", image[0].contentType);
            return readStream.pipe(res);
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({errorMessage: error.message});
    }
})

router.delete('/delete', auth, async(req, res) => {
    try {
        const currentUser = await User.findOne({username: req.user.username});
        if(!currentUser || req.user.username !== currentUser.username) return res.status(401).json({errorMessage: "Anda tidak memiliki izin untuk melakukan hal tersebut"});

        await gfs.delete(new mongoose.Types.ObjectId(currentUser.avatarId));
        currentUser.avatarId = undefined;
        
        await currentUser.save();
        res.status(200).json({message: 'Foto telah berhasil di hapus'});
    } catch (error) {
        console.log(error);
        return res.status(500).json({errorMessage: error.message});
    }
});

module.exports = router;