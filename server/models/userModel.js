const mongoose = require("mongoose");

function favValidator(val){
    return val.length <= 100;
}

const favLimit = [favValidator, 'Daftar projek favorit anda sudah penuh, silahkan hapus beberapa terlebih dahulu']

const userSchema = new mongoose.Schema({
    fullName: {type: String},
    gender: {type: String},
    email: {type: String, required: true, unique: true},
    username: {type: String, required: true, unique: true},
    bio: {type: String, required: false, default: 'Bio user ini masih kosong.'},
    phone: {type: Number, required: false},
    website: {type: String, required: false},
    address: {type: String, required: false},
    city: {type: String, required: false},
    province: {type: String, required: false},
    passwordHash: {type: String, required: true},
    permission: {type: Number, required: true},
    serviceType: {type: String, default: 'user'},
    avatarId: {type: mongoose.SchemaTypes.ObjectId, required: false, default:null},
    status: {type: Number, default: 0},
})

userSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret.id;
        delete ret.passwordHash;
        delete ret._id;
    }
});

const  User = mongoose.model("user", userSchema);

module.exports = User;