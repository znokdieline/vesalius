const mongoose = require('mongoose');
const { Schema } = mongoose;

const HeightSchema = new Schema({
    burialCollection: {
        type: String
    },
    burial: {
        type: String
    },
    sex: {
        type: String
    },
    radius: {
        type: Number
    },
    ulna: {
        type: Number
    },
    humerus: {
        type: Number
    },
    fibula: {
        type: Number
    },
    tibia: {
        type: Number
    },
    femur: {
        type: Number
    }
},
{
    timestamps: true
});

const Height = mongoose.model( 'Height', HeightSchema );

module.exports = Height;