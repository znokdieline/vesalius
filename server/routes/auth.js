//para autentificar usario
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const bcryptSalt = 10;

const User = require('../models/user');

router.get('/', (req, res) => {
    res.send('estamos en el auth')
});

//router del signUp

router.post('/', (req, res) => {
    
    const { userName, mail, password } = req.body;
    const salt = bcrypt.genSaltSync(bcryptSalt);
    const hashPass = bcrypt.hashSync( password, salt);

    //validar usuario para no repetir
    User.findOne({ 'userName' : userName })
    .then(user => {
        if (user !== null) {
            res.render('auth/signup', {
                errorMessage: '¡Este usuario ya existe!'
            });
            return;
        }
    });
    // creación de un usuario
    User.create({
        userName,
        mail,
        password: hashPass
    })
    .then(() => {
        res.redirect('/');
    })
    .catch(error => {
        console.log(error);
    })
});




module.exports = router;
