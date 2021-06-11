const { check, validationResult } = require('express-validator');

const updateValidation = [
    check('email', 'Mohon untuk memasukkan email yang benar')
    .optional().isEmail().trim().normalizeEmail(),

    check('bio').isLength({max: 500}).withMessage('Bio melebihi batas karakter (500)')
    .optional().trim(),

    check('phone').optional().isMobilePhone('any').withMessage('Mohon masukkan nomor telefon yang valid')
    .trim(),

    check('website').optional().isURL()
    .trim()
];

const passwordUpdateVal = [
    check('newPassword').not().isEmpty().isLength({min: 8}).withMessage('Password harus memiliki minimal 8 karakter!')
    .matches('[0-9]').withMessage('Password harus memiliki angka!')
    .matches('[A-Z]').withMessage('Password harus memiliki huruf besar!')
]

module.exports = {updateValidation, passwordUpdateVal};