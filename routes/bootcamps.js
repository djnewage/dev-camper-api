const express = require('express');
const router = express.Router();



//Get all bootcamps
router.get('/', (req, res) => {
    res.status(200).json({success: true, msg: 'Show all bootcamps'})
});
//Get a single bootcamp
router.get('/:id', (req, res) => {
    res.status(200).json({success: true, msg: `Get Bootcamp ${req.params.id}`})
});
//Create a bootcamp
router.post('/', (req, res) => {
    res.status(200).json({success: true, msg: 'Create new bootcamp'})
});
//Update a bootcamp
router.put('/:id', (req, res) => {
    res.status(200).json({success: true, msg: `Update Bootcamp ${req.params.id}`})
});
//Delete a bootcamp
router.delete('/:id', (req, res) => {
    res.status(200).json({success: true, msg: `Delete Bootcamp ${req.params.id}`})
});

module.exports = router;