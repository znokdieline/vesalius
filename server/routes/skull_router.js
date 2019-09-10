const express = require('express');
const router = express.Router();

const Skull = require('../models/skull');


router.get('/', (req, res) => {
    res.send('Es para craneo')
});


router.post('/skull',(req, res) => {
    const { burialCollection, burial, nuchalCrest, mastoidProcess, supraOrbitalMargin, supraOrbitalGlabella, mentalEminence, description } = req.body;

    Skull.create({
        burialCollection,
        burial,
        nuchalCrest,
        mastoidProcess,
        supraOrbitalMargin,
        supraOrbitalGlabella,
        mentalEminence,
        description,
        User
    })
    .then(() => {
        res.redirect('/');
    })
    .catch(error => {
        console.log(error);
    })
});



module.exports = router;