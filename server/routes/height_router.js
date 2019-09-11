const express = require('express');
const router = express.Router();

const Height = require('../models/heightEstimate');

router.get('/', (req, res) => {
    res.send('Es para altura');
});

router.post('/', (req, res) => {
    const { burialCollection, burial, sex, radius, ulna, humerus, fibula, tibia, femur } = req.body;

    Height.create({
        burialCollection,
        burial,
        sex,
        radius,
        ulna,
        humerus,
        fibula,
        tibia,
        femur
    })
    .then(() => {
        res.redirect('/');
    })
    .catch(error => {
        console.log(error);
    })
});


module.exports = router;