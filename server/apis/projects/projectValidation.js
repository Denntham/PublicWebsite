const { check, validationResult } = require('express-validator');
const { format } = require('sharp');

const newProjectValidation = [
    check('name').trim().escape(),
    check('location').trim().escape(),
    check('description').optional().trim().escape(),
    check('projectStatus').trim().escape(),
    check('buildingType').trim().escape(),
    check('year').isNumeric().trim().escape()
]

const editProjectValidation = [
    check('name').optional().trim().escape(),
    check('location').optional().trim().escape(),
    check('description').optional().trim().escape(),
    check('projectStatus').optional().trim().escape(),
    check('buildingType').optional().trim().escape(),
    check('year').optional().isNumeric().trim().escape()
]

module.exports = {newProjectValidation, editProjectValidation};