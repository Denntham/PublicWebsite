const Mail = require('../../models/mailModel');
const {Project} = require('../../models/projectModel');
const User = require('../../models/userModel'); 
const auth = require('../middlewares/auth');
const transport = require('./nodemailer.config');
const jwt = require('jsonwebtoken');
const router = require('express').Router();
const mongoose = require('mongoose');

async function parseMessage(req, res, inputs){
    try {
        if(inputs.projectOriginID){
            const project = await Project.findOne({_id: new mongoose.Types.ObjectId(inputs.projectOriginID)});
            if(!project.leads) {
                project.leads = 1;
            } else {
                project.leads += 1;
            }
            await project.save();
        }

        //Parse the inputs into a message
        const msg = {
            title: inputs.title,
            message: inputs.message,
            sender: req.user.username,
            persistSender: req.user.username,
            receiver: req.params.username,
            persistReceiver: req.params.username,
            phone: inputs.phone,
            projectOriginID: inputs.projectOriginID ? inputs.projectOriginID : undefined
        };

        return msg;
    } catch (error) {
        console.log(error);
        return res.status(500).json({errorMessage: error.message});
    }
}

router.post('/:username', auth, async (req,res) => {
    try {
        if(!req.body) return res.status(401).json({errorMessage: 'Tidak ada input'});
        const inputs = req.body;

        //First check if the conversation already exists
        let mail = await Mail.findOne({ participants: { $all: [req.user.username, req.params.username]} });
        const user = await User.findOne({username: req.params.username});

        //If convo doesn't exist, make a new one
        if(!mail){
            //Make sure user exist
            const existingReceiver = await User.findOne({username: req.params.username});
            if(!existingReceiver) return res.status(401).json({errorMessage: 'Tidak ada user dengan username tersebut'});

            //Start a new conversation
            mail = new Mail({
                messageList: [],
                participants: [req.user.username, req.params.username]
            });
        }

        //If message is sent through a project then add +1 to the leads of the project
        //Project origin should be the ID of the project
        const msg = await parseMessage(req, res, inputs);

        const emailNotif = {
            from: process.env.user,
            to: user.email,
            subject: "ArsiteQ: You've received a new mail!",
            text: msg.title + "\n" + msg.message
        }
        //Add it to the list
        mail.messageList.push(msg);

        //Send the mail
        await mail.save();
        transport.sendMail(emailNotif, (err, info) => {
            if(err){
                console.log("Error with sending email: ", err);
            } else {
                console.log('Email sent: ' + info.response)
            }
        })
        res.status(200).json({message: 'Pesan anda telah berhasil dikirim'});
    } catch (error) {
        console.log(error);
        return res.status(500).json({errorMessage: error.message});
    }
});

router.get('/inbox', auth, async (req,res) => {
    try {
        const mails = await Mail.find({participants: req.user.username});
        if(mails.length === 0) return res.status(404).json({errorMessage: 'Tidak ada pesan untuk saat ini'});
        
        const mailList = []

        mails.forEach(function(mail){
            if(mail.messageList.length > 0) {
                //Iterate through the mails and only return the mail where the current user
                //is the receiver
                for(i = 0;i < mail.messageList.length; i++){
                    if(mail.messageList[i].receiver === req.user.username){
                        mailList.push(mail.messageList[i]);
                    }
                }
            }
        })

        if(mailList.length === 0) return res.status(404).json({errorMessage: 'Inbox anda kosong'});

        res.status(200).json(mailList);

    } catch (error) {
        console.log(error);
        return res.status(500).json({errorMessage: error.message});
    }
})

router.get('/outbox', auth, async (req,res) => {
    try {
        const mails = await Mail.find({participants: req.user.username});
        if(mails.length === 0) return res.status(404).json({errorMessage: 'Tidak ada pesan untuk saat ini'});
        
        const mailList = []

        mails.forEach(function(mail){
            if(mail.messageList.length > 0) {
                //Iterate through the mails and only return the mail where the current user
                //is the receiver
                for(i = 0;i < mail.messageList.length; i++){
                    if(mail.messageList[i].sender === req.user.username){
                        mailList.push(mail.messageList[i]);
                    }
                }
            }
        })

        if(mailList.length === 0) return res.status(404).json({errorMessage: 'Inbox anda kosong'});

        res.status(200).json(mailList);
    } catch (error) {
        console.log(error);
        return res.status(500).json({errorMessage: error.message});
    }
});

router.get('/open/:username', auth, async(req,res) => {
    try {
        let mail = await Mail.findOne({ participants: { $all: [req.user.username, req.params.username]} });
        if(!mail) return res.status(404).json({errorMessage: 'Tidak ada pesan untuk saat ini'});

        res.status(200).json(mail.messageList);
    } catch (error) {
        console.log(error);
        return res.status(500).json({errorMessage: error.message});
    }
});

router.delete('/deleteOne/:messageID', auth, async (req,res) => {
    try {
        let mails = await Mail.find({ participants: req.user.username });
        if(!mails) return res.status(404).json({errorMessage: 'Pesan tidak ditemukan'});

        await mails.forEach(async function(mail){
            const msg = await mail.messageList.id(new mongoose.Types.ObjectId(req.params.messageID));
            if(msg){
                if(msg.sender === req.user.username){
                    msg.sender = undefined;
                }
        
                if(msg.receiver === req.user.username){
                    msg.receiver = undefined;
                }
        
                if(!msg.receiver && !msg.sender){
                    msg.remove();
                }

                await mail.save((err) => {
                    if(err) throw err;
                });
            }
        });

        res.status(200).json({message: 'Pesan telah berhasil dihapus'});
    } catch (error) {
        console.log(error);
        return res.status(500).json({errorMessage: error.message});
    }
});

module.exports = router;