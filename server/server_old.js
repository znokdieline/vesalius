const express = require('express');
const mongoose = require('mongoose');
const app = express();
const morgan = require('morgan')


const session = require('express-session');
const MongoStore = require('connect-mongo') (session);

mongoose.connect('mongodb://localhost:27017/vesalius', { useNewUrlParser: true })
    .then(() => console.log('Base de datos lista'))
    .catch(error => console.log(error))

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'))

// basicAuth
app.use(session({
    secret: 'basic-auth-secret',
    cookie: { maxAge: 60000 },
    resave: true,
    saveUninitialized: true,
    store: new MongoStore({
        mongooseConnection: mongoose.connection,
        ttl: 24 * 60 * 60
    })
}));


app.use('/', require('./routes/auth'));
app.use('/routerside', require('./routes/site-routes'));
app.use('/userdashboard', require('./routes/user_routes'))
app.use('/skull', require('./routes/skull_router'));
app.use('/remain', require('./routes/remain_router'));
app.use('/height', require('./routes/height_router'));
app.use('/collection', require('./routes/burialCollection_router'))



app.listen(3000, ()=> console.log('servidor listo en puerto 3000 '));