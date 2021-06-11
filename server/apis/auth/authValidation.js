const { check, validationResult } = require('express-validator');

//Validate input
const registrationValidation = [
    check('email', 'Please enter a valid e-mail').not().isEmpty().isEmail().trim().escape().normalizeEmail(),
    check('password').not().isEmpty().isLength({min: 8}).withMessage('Password harus memiliki minimal 8 karakter!')
    .matches('[0-9]').withMessage('Password harus memiliki angka!')
    .matches('[A-Z]').withMessage('Password harus memiliki huruf besar!'),
    check('username').not().isEmpty().isAlphanumeric().withMessage('Username tidak boleh memiliki karakter special.')
    .isLength({min:4}).withMessage('Username harus memiliki minimal 4 karakter!').trim().escape()
];

const loginValidation = [
    check('email', 'Please enter a valid e-mail').not().isEmpty().isEmail().trim().escape().normalizeEmail()
];

module.exports = {registrationValidation, loginValidation};