const bodyParser   = require('body-parser');
const cookieParser = require('cookie-parser');
const path         = require('path');

const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');

const morgan = require('morgan')


const session = require('express-session');
const passport = require('passport');

require('./configs/passport');
app.use(morgan('dev'))


// const MongoStore = require('connect-mongo') (session);

mongoose.connect('mongodb://localhost:27017/vesalius', { useNewUrlParser: true })
.then(() => console.log('Base de datos lista'))
.catch(error => console.log(error))

app.use(passport.initialize());
app.use(passport.session());

// const app_name = require('./package.json').name;


app.use(cors({
    credentials: true,
    origin: ['http://localhost:3000']
}));

//middlewares


// app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const authRoutes    = require('./routes/auth-routes');
app.use('/', authRoutes);

app.use(session({
    secret:'userdashboard',
    resave: true,
    saveUninitialized: true
    // store: new MongoStore({
    //     mongooseConnection: mongoose.connection,
    //     ttl: 24 * 60 * 60
    // })
}));


///

app.use(require('node-sass-middleware')({
    src:  path.join(__dirname, 'public'),
    dest: path.join(__dirname, 'public'),
    sourceMap: true
  }));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));

//////
// app.use('/', require('./routes/auth'));
app.use('/routerside', require('./routes/site-routes'));
app.use('/userdashboard', require('./routes/user_routes'))
app.use('/skull', require('./routes/skull_router'));
app.use('/remain', require('./routes/remain_router'));
app.use('/height', require('./routes/height_router'));
app.use('/collection', require('./routes/burialCollection_router'))



app.listen(3000, ()=> console.log('servidor listo en puerto 3000 '));