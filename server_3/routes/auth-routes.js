const express       = require('express');
const authRoutes    = express.Router();

const passport     = require('passport');
const bcrypt       = require('bcryptjs');

const User         = require('../models/user');

//signup

authRoutes.post('/signup', (req, res, next) =>{
    const userName = req.body.userName;
    const passport = req.body.password;

    if ( !userName || !password ) {
        res.status(400).json({message: 'ingrese su nombre de ususario y contraseña'});
        return;
    }

    if ( password.length < 3 ){
        res.status(400).json({ message: 'ingrese una clave mayor' });
        return;
    }
    User.findOne({ userName }, (error, foundUser) => {

        if (error){
            res.status(500).json({ message: 'nombre de ususario... otro' });
            return;
        }
        if (foundUser) {
            res.status(400).json({ massage: 'Este usuario ya existe ' });
            return;
        }

        const salt      = bcrypt.genSaltSync(10);
        const hashPass  = bcrypt.hashSync(password,salt);

        const aNewUser = new User({
            userName:UserName,
            password: hashPass
        });
        aNewUser.save( error => {

            if ( error ) {
                res.status(400).json({ message: 'algo paso y fue mal' });
                return;
            }

            //aqui se envia la informacion del ususario

            res.status(200).json(aNewUser);
        });
    });
}) ;

//login

authRoutes.post('/login', (req, res, next) => {
    passport.authenticate('local', (error, theUser, failureDetails) => {
        if (error) {
            res.status(500).json({message: 'algo fue mal con la autenticación'} );
            return;
        }
        if ( !theUser ) {
            //'failureDetails' contains the error message
            //desde la logica en localStrategy 
            res.status(401).json(failureDetails);
            return;
        }
        //se salva al user en la sesion
        req.login( theUser,(error) => {
            if ( error ) {
                res.status(500).json({ message: 'el grabado de sesion fue mal' });
                return;
            }
            //si va mal el log se use req.user
            res.status(200).json(theUser);
        });
    })(req, res, next);
});

authRoutes.post('/logout', (req, res, next) => {
    //req.logout() se define en el passport
    req.logout();
    res.status(200).json({ message: 'logout exitoso' });
});

authRoutes.get('/loggedin', (req, res, next) => {
    //req,isAu... se define por el passport
    if ( req.isAuthenticated() ) {
        res.status(200).json(req.user);
        return;
    }
    res.status(403).json({ message: 'sin autorización' });
});

module.exports =authRoutes;