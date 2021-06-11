const router = require("express").Router();
const User = require("../../models/userModel");
const bcrypt = require("bcryptjs"); 
const jwt = require("jsonwebtoken");
const { check, validationResult } = require('express-validator');
const {registrationValidation, loginValidation} = require('./authValidation');
const getLoggedIn = require('../middlewares/getLoggedIn');

const errorFormatter = ({ location, msg, param }) => {
    return `[${param}]: ${msg}`;
};

//REGISTRATION HANDLER
//Add validations here and account fields in userModel.js
router.post("/register", registrationValidation, async (req,res) => {
    //PARAMS:
    // Email - (String) Email of the user
    // Username - (String)
    // Password - (String) must be checked with passwordVerify
    // PasswordVerify - (String) for password verification/confirmation
    // Roles - (Int) User roles :
    //          0: User, 1: Moderators, 2: Admin
    //          Refer to documentation for role information (Coming Soon)
    //          To add more roles add to permissions array on top

    try{
        //Various validations
        const errors = validationResult(req).formatWith(errorFormatter);
        if(!errors.isEmpty()){ return res.status(422).json({errorMessage: errors.array()})};
        
        if(!req.body) return res.status(401).json({errorMessage: 'Input tidak boleh kosong'});
        const inputs = req.body;

        if(inputs.password !== inputs.passwordVerify)
        return res.status(400).json({errorMessage: "Password dan verifikasi tidak sama"})
        
        let existingUser = await User.findOne({ email: inputs.email });

        if(existingUser)
        return res.status(400).json({ errorMessage: "Email telah terdaftar, mohon gunakan email yang lain"})

        existingUser = await User.findOne({username: inputs.username});

        if(existingUser){
            return res.status(400).json({errorMessage: "Username tersebut sudah terdaftar, mohon gunakan username yang lain"})
        }

        let serviceType = '';
        if(inputs.permission === 1){
            if(!inputs.serviceType || inputs.serviceTye === '') return res.status(401).json({errorMessage: 'Anda harus memilih tipe jasa yang anda menyediakan.'});
            serviceType = inputs.serviceType;
        }
        
        //Password Hashing
        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(inputs.password, salt);
        
        //Add user to database
        const newUser = User({
            email: inputs.email,
            username: inputs.username, 
            passwordHash: passwordHash,
            permission: inputs.permission,
            status: 0,
            serviceType: inputs.permission === 1 && serviceType !== '' ? serviceType : 'user'
        });

        await newUser.save();

        //Log the user in after registration

        //Sign JWT Token
        const token = jwt.sign({ 
            user: newUser._id,
            username: newUser.username,
            permission: newUser.permission
        }, process.env.JWT_SECRET, {
            expiresIn: process.env.accessTokenLife
        });

        //Send token via HTTP-Only cookie
        res.cookie("token", token, {
            httpOnly: true
        });

        res.send();
    } catch (err) {
        console.log(err);
        res.status(500).json({errorMessage: err.message});
    }
});

//Login
router.post("/login", loginValidation ,async(req,res) => {
    try{
        
        const { email, password } = req.body;
        //Validation
        if(!email || !password) 
        return res.status(400).json({ 
            errorMessage: "Mohon isi semua informasi registrasi anda." 
        });

        const existingUser = await User.findOne({ email });
        if(!existingUser) return res.status(400).json({errorMessage: 'Email tersebut belum terdaftar, silahkan registrasi terlebih dahulu'})
        const passwordCorrect = await bcrypt.compare(password, existingUser.passwordHash);

        if(!passwordCorrect || !existingUser)
        return res.status(401).json({errorMessage: "User atau password yang anda masukkan salah, mohon cek ulang"})
         //Sign JWT Token
        const token = await jwt.sign({ 
            user: existingUser._id,
            username: existingUser.username,
            permission: existingUser.permission
        }, process.env.JWT_SECRET, {
            expiresIn: process.env.accessTokenLife
        });
        //Send token via HTTP-Only cookie
        res.cookie("token", token, {
            httpOnly: true
        });

        res.send();

    }catch(err){
        console.error(err);
        res.status(500).json({errorMessage: err.message});
    }
});

//Check if user is logged in
//This is for setting context
router.get("/loggedIn", async (req, res) => {
    try{
        if(!req.cookies.token) return res.cookie("token", "", {
            httpOnly: true,
            //Sets expiry date to the past so browsers will clear cookie by default
            expires: new Date(0)
        }).status(200).json({loggedIn: false});
        
        const token = req.cookies.token;
        const verified = jwt.verify(token, process.env.JWT_SECRET, (err, result) => {
            if(err) throw err;
            return result;
        })
        const userInfo = {
            username: verified.username,
            permission: verified.permission,
            loggedIn: true
        }
        res.status(200).json(userInfo);

    } catch (err) {
        console.error(err);
        if(err.message == "jwt expired" || err.message == 'jwt must be provided'){
            return res.cookie("token", "", {
                httpOnly: true,
                //Sets expiry date to the past so browsers will clear cookie by default
                expires: new Date(0)
            }).status(200).json({loggedIn: false});
        }
        else{
            res.status(500).json(err.message);
        }
    }
});

//Logout
router.get("/logout", (req,res) => {

    res.cookie("token", "", {
        httpOnly: true,
        //Sets expiry date to the past so browsers will clear cookie by default
        expires: new Date(0)
    }).status(200).send();
});

module.exports = router;