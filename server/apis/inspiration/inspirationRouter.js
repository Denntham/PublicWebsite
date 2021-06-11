const router = require('express').Router();
const auth = require('../middlewares/auth');
const Inspirations = require('../../models/Inspirations');

async function albumExists(name, owner, res){
    const album = await Inspirations.findOne({name: name, owner: owner});
    if(!album) return res.status(404).json({errorMessage: 'Album tidak ditemukan'});

    return album;
}

router.post('/add', auth, async(req,res) => {
    try{
        if(Object.keys(req.body).length === 0) return res.status(400).json({errorMessage: 'Tidak bisa memasukkan data null'});

        const inputs = req.body;

        const existingAlbum = await Inspirations.findOne({id: inputs.albumID, owner: req.user.username});

        //If it exists then just add it immediately
        if(existingAlbum) {
            if(existingAlbum.inspoList.includes(inputs.albumID)) return res.status(409).json({errorMessage: 'Project sudah terdaftar di album ini.'})
            existingAlbum.inspoList.push(inputs.projectID);
            await existingAlbum.save();
            return res.status(200).json({message: 'Project berhasil ditambahkan ke album anda'});
        }

        //If album doesn't exist, make a new one
        if(!existingAlbum) {

            //Parse ID:
            const docSum = await Inspirations.countDocuments();
            const ownerAlbumCount = await Inspirations.countDocuments({owner: req.user.username});

            let docID = inputs.name || inputs.name !== "" ? inputs.name : `New Album ${ownerAlbumCount}`;
            docID = docID.split(" ").join('').toString().toLowerCase();

            const newID = `${docSum}-${docID}-${req.user.username}`;

            let newInspo = [];

            if(inputs.projectID){
                newInspo.push(inputs.projectID);
            }

            const newAlbum = new Inspirations({
                id: newID,
                name: inputs.name ? inputs.name : `New Album ${ownerAlbumCount}`,
                desc: inputs.desc ? inputs.desc : '--',
                owner: req.user.username,
                inspoList: newInspo,
            });

            await newAlbum.save();
            
            return res.status(200).json({errorMessage: 'Album baru telah terbuat'});
        }

    } catch(error) {
        console.log(error);
        res.status(500).json({errorMessage: error.message});
    }
});

router.get('/albums', auth, async(req,res) => {
    try {
        const albums = await Inspirations.find({owner: req.user.username});
        if(!albums || albums.length === 0) return res.status(404).json({errorMessage: 'Inspiration list anda masih kosong'});

        return res.status(200).json(albums);
    } catch (error) {
        console.log(error);
        res.status(500).json({errorMessage: error.message});
    }
})

router.get('/inspirations/:albumID', auth, async(req,res) => {
    try {
        const album = await Inspirations.find({id: req.params.albumID, owner: req.user.username});
        if(!album) return res.status(404).json({errorMessage: 'Inspiration list anda masih kosong'});

        return res.status(200).json(album[0]);
    } catch (error) {
        console.log(error);
        res.status(500).json({errorMessage: error.message});
    }
})

router.put('/edit/:albumName', auth, async(req,res) => {
    try {
        if(Object.keys(req.body).length === 0) return res.status(400).json({errorMessage: 'Tidak bisa memasukkan data null'});
        const album = await albumExists(req.params.albumName, req.user.username, res);
        
        const inputs = req.body;

        if(inputs.name) album.name();
        if(inputs.desc) album.desc();

        await album.save();

        return res.status(200).json({message: 'Anda telah berhasil mengedit album ini.'});
    } catch (error) {
        console.log(error);
        res.status(500).json({errorMessage: error.message});
    }
});

router.delete('/delete/:albumID', auth, async(req,res) => {
    try {
        await Inspirations.findOneAndDelete({id: req.params.albumID, owner: req.user.username});

        return res.status(200).json({message: 'Album deleted successfully'});
    } catch (error) {
        console.log(error);
        res.status(500).json({errorMessage: error.message});
    }
});

router.delete('/delete/:albumID/:projectID', auth, async(req,res) => {
    try {
        if(!req.params.albumID) return res.status(400).json({errorMessage: 'Nama album tidak boleh kosong'});
        if(!req.params.projectID) return res.status(400).json({errorMessage: 'Project ID tidak boleh kosong'});

        const album = await Inspirations.findOne({id: req.params.albumID, owner: req.user.username});
        
        const elementPos = album.inspoList.findIndex(inspo => String(inspo) === String(req.params.projectID));
        album.inspoList.splice(elementPos, 1);  

        await album.save();
        return res.status(200).json({message: 'Project telah berhasil dihapus dari inspo anda'});
    } catch (error) {
        console.log(error);
        res.status(500).json({errorMessage: error.message});
    }
})

module.exports = router;