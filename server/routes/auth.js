// //para autentificar usario
// const express = require('express');
// const router = express.Router();
// const bcrypt = require('bcrypt');
// const bcryptSalt = 10;

// const User = require('../models/user');

// console.log( 'este es el User en el back -->' ,User)


// //login

// // router.get("/login", (req, res, next) => {
// //     res.json(user)
// //   });

// router.post('/login', (req, res, next) => {
//     const thisMail  = req.body.mail;
//     const thisPassword  = req.body.password;

//     console.log(thisMail);
//     console.log(thisPassword);

//     if ( thisMail === '' || thisPassword === '' ) {
//         res.json({errorMessage: 'introduzca user y password!'});
//         return;
//     }

//     User.findOne({ 'mail' : thisMail  })
//     .then(user => {
//         if( !user ){
//             res.json({ errorMessage:'este usuario no existe' });
//             return;
//         }
//         if ( bcrypt.compareSync(thisPassword, user.password) ) {
//             req.session.currentUser = user;
//             res.json({user});
//             console.log('este es el user en el back --->',user);
//             console.log('este es el currentUser el back --->',req.session.currentUser);

//         } else {
//             res.json({ errorMessage: 'password incorrecto' });
//         }
//     })
//     .catch (error  => {
//         next(error)
//     });
// })


// //router del signUp

// router.post('/signup', (req, res, next) => {

//     const { userName, mail, password } = req.body;
//     const salt     = bcrypt.genSaltSync(bcryptSalt);
//     const hashPass = bcrypt.hashSync(password, salt);

//     if ( userName === '' || mail === '' || password === '' ) {
//         res.json({errorMessage: 'introduzca nombre de usuario, mail contraseña'});
//         return;
//     };

//     User.findOne({ userName, mail })
//     .then(user => {
//         if ( user ) {
//             res.json({errorMessage: '¡Este usuario ya existe!'})
//             return;
//         }
//     })
//     .catch(err => console.log(err))
    

//     let newUser = new User({ userName, mail, password: hashPass });
//     newUser.save()
//         .then(user => {
//             return res.json(newUser)
//         })
//         .catch(err => console.log(err));

//         console.log( 'esto es del newUser---> ', newUser)
// });

// router.get('/logout', (req, res, next) => {
//     req.session.destroy((error) => {
//         res.redirect('/login')
//     })
// })




// module.exports = router;
