const mongoose = require('mongoose');
const { Schema } = mongoose;


const SkullSchema =  new Schema({
    
    burialCollection: {
        type: String
    },
    burial: {
        type: String
    },
    nuchalCrest: {
        type: Number
    },
    mastoidProcess: {
        type: Number
    },
    supraOrbitalMargin: {
        type: Number
    },
    supraOrbitalGlabella:{
        type: Number
    },
    mentalEminence: {
        type: Number
    },
    description: {
        type: String
    },
    User: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
},{
    timestamps: true
});

//para exportar el modulo

const Skull = mongoose.model( 'Skull' , SkullSchema );

module.exports = Skull;
