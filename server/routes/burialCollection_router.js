const express = require('express');
const router = express.Router();


const BurialCollection = require('../models/burialCollection');

router.get('/', (req, res) => {
    BurialCollection.find()
    .then(burialCollection => {
        res.json(burialCollection)
    }).catch(error => console.log(error))
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