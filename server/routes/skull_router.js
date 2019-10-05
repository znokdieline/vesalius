const express = require('express');
const router = express.Router();

const Skull = require('../models/skull');


router.get('/', (req, res) => {
    Skull.find()
        .then(skull => {
            res.json(skull)
        }).catch(err => console.log(err))
});

router.post('/', (req, res) => {
    const { burialCollection, burial, nuchalCrest, mastoidProcess, supraOrbitalMargin, supraOrbitalGlabella, mentalEminence, description } = req.body;

    const skull = new Skull({
        burialCollection,
        burial,
        nuchalCrest,
        mastoidProcess,
        supraOrbitalMargin,
        supraOrbitalGlabella,
        mentalEminence,
        description
        });

    skull.save()
    .then(data => {
        res.json(data)
    })
    .catch(error => {
        console.log(error);
    })
});



module.exports = router;