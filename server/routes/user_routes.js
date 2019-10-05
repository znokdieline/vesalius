const express = require('express');
const router = express.Router();
const tokenVal = require('./tokenVal');

const User = require('../models/user');


router.get('/', tokenVal.authorization, (req, res) => {
    User.findOne({_id: req.userId}).then(user => {
        if (!user) {
            res.status(400).json({success: false, message: "Usuario no valido"})
            return
        }

        res.status(200).json({success: true, user});
    }).catch(err => console.log(err))
});

router.post('/',(req, res) =>{
    const { userPhoto, firstName, surName, lastName, userName, mail ,password, educativeInstitution, educationResearcher, collections, tasks, owner } = req.body; 
    
    User.create({
        userPhoto, 
        firstName,
        surName, 
        lastName, 
        username, 
        mail,
        password, 
        educativeInstitution, 
        educationResearcher, 
        collections,
        tasks,
        owner, 

    })
    .then(()=>{
        res.redirect('/');
    })
    .catch(error => {
        console.log(error);
    });
});



module.exports = router;
