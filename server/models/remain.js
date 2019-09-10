const mongoose = require('mongoose');
const { Schema } = mongoose;

const RemainSchema = new Schema({
    burialCollection: {
        type: String
    },
    burial: {
        type: String
    },
    number: {
        type:String
    },
    classOf: {
        type: String
    },
    kind: {
        type: String
    },
    shape: {
        type: String
    },
    variety: {
        type: String
    },
    orientation: {
        type: String
    },
    location: {
        type: String
    },
    description: {
        type: String
    }
},{
    timestamps: true
});

const Remain = mongoose.model( 'Remain', RemainSchema);

module.exports = Remain;