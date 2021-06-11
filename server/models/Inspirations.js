const mongoose = require("mongoose");

function inspoVal(val){
    return val.length <= 100;
}

const inspoLimit = [inspoVal, 'Album inspo ini sudah penuh mohon menghapus beberapa project dari album ini.'];

const InspirationSchema = new mongoose.Schema({
    id: {type: String, required: true, unique: true},
    owner: {type: String, required: true},
    name: {type: String, required: true},
    desc: {type: String, default: '--'},
    inspoList: {
        type: [mongoose.Types.ObjectId],
        validate: inspoLimit,
        default: [],
    },
    followers: {
        type: [String],
    }
})

const Inspirations = mongoose.model("inspiration", InspirationSchema);

module.exports = Inspirations;