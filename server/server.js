const express = require('express');
const mongoose = require('mongoose')
const app = express();

mongoose.connect('mongodb://localhost:27017/vesalius', { useNewUrlParser: true })
    .then(() => console.log('Base de datos lista'))
    .catch(error => console.log(error))



//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/auth', require('./routes/auth'));
app.use('/skull', require('./routes/skull_router'));
app.use('/remain', require('./routes/remain_router'));
app.use('/height', require('./routes/height_router'));
app.use('/collection', require('./routes/burialCollection_router'))


app.listen(3000, ()=> console.log('servidor listo en puerto 3000 '));