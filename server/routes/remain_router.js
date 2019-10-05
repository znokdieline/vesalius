const express = require('express');
const router = express.Router();

const Remain = require('../models/remain');


router.get('/', (req, res) => {
    Remain.find()
    .then(remain => {
        res.json(remain)
    }).catch(error => console.log(error))
});

router.post('/', (req, res) => {
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