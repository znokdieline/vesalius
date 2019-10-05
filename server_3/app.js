const session       = require('express-session');
const passport      = require('passport');

const cors = require('cors');


// require('./configs/passport');


// middleware

const authRoutes = require('./routes/auth-routes');
app.use( '/appi', authRoutes  );

//sesion

app.use(session({
    secret: 'config secreto',
    resave:true,
    saveUninitialized: true
}));

//use passport.ini y pass.session
app.use(passport.initialize());
app.use(passport.passport.session());


app.listen(3000, ()=> console.log('servidor listo en puerto 3000 '));