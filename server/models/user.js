const mongoose = require('mongoose');
const  Schema  = mongoose.Schema;

const UserSchema = new Schema({
        
    userPhoto: {
            type: String,
        },
        firstName:{
            type: String,
            required: false
        },
        surName: {
            type: String,
            required: false
        },
        lastName: {
            type: String,
            required: false
        },
        username: {
            type: String,
            required: false
        },
        mail: {
            type: String,
            required:false
        },
        password: {
            type: String,
            required: false
        },
        educativeInstitution: {
            type: String,
            require: false
        },
        educationResearcher: {
            type:String,
            required: false
        },
        collections: {
            type: String,
            required:false
        },
        skull: [{
            // aquí se referencía el archivo de SkullSchema para usuario
            type: Schema.Types.ObjectId,
            ref: 'Skull'
        }],
        tasks: [{type: Schema.Types.ObjectId, ref: 'Task'}],
        owner: [{type: Schema.Types.ObjectId, ref: 'User'}],

    }, {
        timestamps: true
    }
);

//para exportar el modulo

const User = mongoose.model( 'User' , UserSchema );

module.exports = User;