const router = require("express").Router();
const User = require("../../models/userModel");
const bcrypt = require('bcryptjs')

const { check, validationResult } = require('express-validator');
const {updateValidation, passwordUpdateVal} = require('./userValidation');
const auth = require("../middlewares/auth");
const {permissionList} = require('../../models/permissionList');
const {Project} = require('../../models/projectModel');

const errorFormatter = ({msg, param }) => {
	return `[${param}]: ${msg}`;
};

router.get('/get/:username', async(req, res) => {
	try {
		const user = await User.findOne({username: req.params.username});
		
		const payload = {
			username: user.username,
			serviceType: user.serviceType !== "user" ? user.serviceType : permissionList[user.permission],
		}

		res.status(200).json(payload);

	} catch (error) {
		console.log(error);
		return res.status(500).json({errorMessage: error.message});
	}
});

router.get('/profile', auth, async(req, res) => {
	try {
		const user = await User.findOne({username: req.user.username});
		if(!user) return res.status(404).json({errorMessage: 'User tidak ditemukan'});

		res.status(200).json(user);
	} catch (error) {
		console.log(error);
		return res.status(500).json({errorMessage: error.message});
	}
})

router.get('/profile/:username', async(req, res) => {
	try {
		const user = await User.findOne({username: req.params.username});
		if(!user) return res.status(404).json({errorMessage: 'User tidak ditemukan'});

		res.status(200).json(user);
	} catch (error) {
		console.log(error);
		return res.status(500).json({errorMessage: error.message});
	}
})

router.put('/edit', [auth, updateValidation], async (req, res) => {
	try {
		const currentUser = await User.findOne({username: req.user.username});
		if(!currentUser) return res.status(404).json({errorMessage: 'User tidak ditemukan'});

		const errors = validationResult(req).formatWith(errorFormatter);
		if(!errors.isEmpty()){ return res.status(422).json({errorMessage: errors.array()})};

		const inputs = req.body;
		if(!inputs) return res.status(200).json({message: 'Tidak ada data yang dirubah'});

		if(inputs.fullName) currentUser.fullName = inputs.fullName;
		if(inputs.address) currentUser.address = inputs.address;
		if(inputs.city) currentUser.city = inputs.city;
		if(inputs.province) currentUser.province = inputs.province;
		if(inputs.address) currentUser.address = inputs.address;
		if(inputs.gender) currentUser.gender = inputs.gender;
		if(inputs.email) currentUser.email = inputs.email;
		if(inputs.bio) currentUser.bio = inputs.bio;
		if(inputs.phone) currentUser.phone = inputs.phone;
		if(inputs.website) currentUser.website = inputs.website;

		await currentUser.save();

		res.status(200).json({message: 'Profile telah berhasil diperbarui'});
		
	} catch (error) {
		console.log(error);
		return res.status(500).json({errorMessage: error.message});
	}
});

router.put('/edit/password', [auth, passwordUpdateVal], async (req, res) => {
	try {
		const currentUser = await User.findOne({username: req.user.username});
		if(!currentUser) return res.status(404).json({errorMessage: 'User tidak ditemukan'});

		const errors = validationResult(req).formatWith(errorFormatter);
		if(!errors.isEmpty()){ return res.status(422).json({errorMessage: errors.array()})};

		const {oldPassword, newPassword, newPasswordVerify} = req.body;

		const verifyOldPassword = await bcrypt.compare(oldPassword, currentUser.passwordHash);
		if(!verifyOldPassword) return (res.status(401).json({errorMessage: 'Password lama yang anda masukkan salah'}));
		if(newPassword !== newPasswordVerify) return res.status(401).json({errorMessage: 'Password baru dan konfirmasinya tidak sama'});

		const salt = await bcrypt.genSalt();
		currentUser.passwordHash = await bcrypt.hash(newPassword, salt);
		await currentUser.save();

		res.status(200).json({message: 'Password anda telah berhasil diupdate'});
	} catch (error) {
		console.log(error);
		return res.status(500).json({errorMessage: error.message});
	}
});

router.get('/professionals', async(req,res) => {
	try {
		const users = await User.find({permission: 1, $and: [ req.query ]});
		if(!users) return res.status(404).json({type: 'Tidak ada user yang menyediakan jasa tersebut untuk saat ini'});

		return res.status(200).json(users);
	} catch (error) {
		console.log(error);
		return res.status(500).json({errorMessage: error.message});
	}
});

router.get('/topprojects/:username', async(req,res) => {
	try {
		const projects = await Project.find({uploader: req.params.username, status:1}).limit(4);
		if(!projects) return res.status(404).json({errorMessage: 'Tidak ada projek'});
		res.status(200).json(projects)
	} catch (error) {
		console.log(error);
		return res.status(500).json({errorMessage: error.message});
	}
})


module.exports = router;