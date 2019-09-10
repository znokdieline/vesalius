const express = require('express');
const router = express.Router();


const BurialCollection = require('../models/burialCollection');

router.get('/', (req, res) => {
    res.send('Es para coleccion');
});

router.post('/', (req, res) => {
    const { burialCollectionName, excavationUnity, excavationSeason } = req.body;

    BurialCollection.create({
        burialCollectionName,
        excavationUnity,
        excavationSeason
    })
    .then(() => {
        res.redirect('/');
    })
    .catch(error => {
        console.log(error);
    })
});

module.exports = router;