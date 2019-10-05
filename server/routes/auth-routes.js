//para autentificar usario
const express       = require('express');
const authRoutes    = express.Router();

const passport      = require('passport');
const bcrypt        = require('bcryptjs');
const jwt           = require('jsonwebtoken');



const User = require('../models/user');


authRoutes.post('/signup', (req, res, next) => {

    const userName      = req.body.userName;
    const mail          = req.body.mail;
    const password      = req.body.password;


    if ( !userName || !mail || !password ) {
        res.status(400).json({ message: ' intriduzca nombre de usuario y password' });
        return;
    }
    if ( password.length < 4 ) {
        res.status(400).json({ message: 'introduzca una contraseña más larga' });
        return;
    }

    User.findOne({ userName, mail }, ( error, foundUser, foundMail ) => {

        if ( error ) {
            res.status(500).json({ message: 'algo va mal' });
            return;
        }
        if ( foundUser ) {
            res.status(400).json({ message: 'El nombre de ususario ya existe' });
            return;
        }
        if ( foundMail ) {
            res.status(400).json({ message:'este mail ya está registrado' });
            return;
        }
        const salt      =   bcrypt.genSaltSync(10);
        const hashPass  =   bcrypt.hashSync( password, salt );

        const aNewUser = new User({
            username: userName,
            mail: mail,
            password: hashPass,
        });

    

        aNewUser.save(error => {
            if ( error ) {
                res.status(400).json({ message: 'el login fue mal' });
                return;
            }
            //se envía la info del user al front
            res.status(200).json(aNewUser);
            // console.log('esta esla info del user que se manda---> ',aNewUser);
        });
    });
});

//login

authRoutes.post('/login', (req, res, next) => {
   const { mail, password } = req.body;
    
   User.findOne({mail}).then(user => {
        if ( !user ) {
                res.status(400).json({ message: 'mail incorrecto' })
                return
        }

        if ( !bcrypt.compareSync ( password, user.password ) ) {
            res.status(400).json(
                {
                    success: false,
                    massage: 'debes confirmar tu password'
                }
            )
            return;
        }

        const token = jwt.sign({ id: user._id },'SeVaListo' )

        res.status(200).json({'success':true, 'user': user, 'token': token})
    }   
   ).catch(
       error => console.log(error)
   )

})

//log out

authRoutes.post('/logout', (req, res, next) => {
    //logout viene del passport
    res.logout();
    res.status(200).json({ message: 'adios, vuelve pronto' });
});

authRoutes.get('/loggedin', (req, res, next) => {
    //esta parte viene del passport
    if ( req.isAuthenticated() ) {
        res.status(200).json(req.User);
        return;
    }
    res.status(403).json({ message: 'sin autorizacion' });
});

module.exports = authRoutes;


// authRoutes.post('/login', (req, res, next) => {
//     passport.authenticate('local', (err, theUser, failureDetails ) => {
//         console.log('se supone que este es el User en el login--> ',theUser)
//         if ( err ) {
//             res.status(500).json({ message: 'algo va mal con la autenticación' });
//             return;
//         }
//         if ( !theUser ) {
//            res.status(401).json(failureDetails);
//            return;
//         }
        
//         //salva la sesion en la sesion
//         req.login(theUser, (error) => {
//             console.log("te la comes todita")
//             if ( error ) {
//                 res.status(500).json({ message: 'algo va mal con la sesion' });
//                 return;
//             }
//             //se logeo
//             res.status(200).json({"success": true, "user": theUser});
//             console.log('en teoría se logeó--> ',theUser )
//         });
//     })(req, res, next);
// })