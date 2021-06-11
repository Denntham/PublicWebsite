const mongoose = require("mongoose");

function participantValidator(val){
    return val.length <= 2;
}

const participantsLimit = [participantValidator, 'Mohon maaf ada kesalahan pada sistem kami']


const messageSchema = new mongoose.Schema({
    title: {type: String, required: false, default: 'Untitled'},
    message: {type: String, required: false},
    sender: {type: String},
    persistSender: {type: String},
    receiver: {type: String},
    persistReceiver: {type: String},
    projectOriginID: {type: mongoose.Types.ObjectId},
    phone: {type: Number},
}, {
    timestamps: true
})

const mailSchema = new mongoose.Schema({
    messageList: [messageSchema],
    participants: {
        type: [String],
        validator: participantsLimit
    }
})

const Mail = mongoose.model("mail", mailSchema);

module.exports = Mail;