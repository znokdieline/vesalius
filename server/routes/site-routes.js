const express = require('express');
const router = express.Router();


router.get('/', (req, res, next) => {
    res.json({msg: 'estamos en el inicio'});
});



router.use(( req, res, next) => {
    if(req.session.currentUser){
        next();
    } else {
        res.json({ ok: false });
    }
})


router.get('/user',(req, res, next)=>{
    res.status(200).json({"user": "pinshi user"});
    console.log('el res json del get---> ', user)
});


router.get('/secret', (req,res, next) => {
    res.render('secret');
});






// router.get('/logout', (req, res, next) => {
//     req.session.destroy((error) => {
//         res.redirect('/login')
//     })
// })



module.exports = router;



