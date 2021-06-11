const crypto = require('crypto');
const path = require('path')
const multer = require('multer');
const GridFsStorage = require('multer-gridfs-storage');

//Storage engine
const storage = new GridFsStorage({
    url: process.env.MDB_CONNECT,
    file: (req, file) => {
        return new Promise((resolve, reject) => {
            crypto.randomBytes(16, (err, buff) => {
                if(err) return reject(err);
                
                if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {   
                    const filename = buff.toString('hex') + path.extname(file.originalname);
                    const fileInfo = {
                        filename: filename,
                        bucketName: 'avatars',
                        metadata: {"username": req.user.username}
                    };
                    resolve(fileInfo);
                } else {
                    return reject('Pastikan anda mengunggah file .jpg atau png');
                }
            });
        });
    }
});

const upload = multer({storage: storage, limits: {fileSize: 8 * 1024 * 1024}});
module.exports = upload;