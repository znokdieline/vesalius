const express = require('express');
const router = express.Router();

const Remain = require('../models/remain');

router.get('/', (req, res) => {
    res.send('es para restos')
});

router.post('/remain', (req, res) => {
    const { burialCollection, burial, number, classOf, kind, shape, variety, orientation, location, description } = req.body;

    Remain.create({
        burialCollection,
        burial,
        number,
        classOf,
        kind,
        shape,
        variety,
        orientation,
        location,
        description
    })
    .then(() => {
        res.redirect('/');
    })
    .catch(error => {
        console.log(error);
    })
});

module.exports = router;