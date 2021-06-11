const mongoose = require("mongoose");

function validator(val) {
    return val.length > 0 && val.length <= 5;
}

function imgValidator(val) {
    return val.length <= 10;
}

const tagsLimit = [validator, 'Silahkan memasukan 1 - 5 tipe desain untuk projek anda'];
const imageLimit = [imgValidator, 'Anda hanya dapat mengunggah maksimal 10 foto untuk projek ini'];

const projectSchema = new mongoose.Schema({
    name: {type: String, required: true},
    location: {type: String, required: true},
    uploader: {type: String, required: true},
    description: {type: String, default: 'Deskripsi untuk projek ini kosong'},
    buildingType: {type: String, required: true},
    year: {type: Number, min: 2000, max: 2090},
    projectStatus: {type: String, required: true},
    category: {type: String, required: true},
    price: {type: Number},
    city: {type: String, required: true},
    province: {type: String, required: true},
    //TODO: Add pricing for filtering
    //Suggest: Let user set price range
    photosIDs: {
        type: [mongoose.Types.ObjectId],
        validate: imageLimit
    },
    designStyle: {
        type: [String],
        validate: tagsLimit
    },
    leads: {type: Number},
    status: {type: Number, default: 0},
    rejectedMessage: {type: String, default: ''}
})

const Project = mongoose.model("project", projectSchema);

module.exports = {Project};