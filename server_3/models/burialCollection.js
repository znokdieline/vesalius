const mongoose = require('mongoose');
const { Schema } = mongoose;

const BurialCollectionSchema = new Schema({
    burialCollectionName: {
        type: String
    },
    excavationUnity: {
        type: String
    },
    excavationSeason: {
        type: String
    }
},
{
    timestamps: true
});

const BurialCollection = mongoose.model( 'Burial', BurialCollectionSchema);

module.exports = BurialCollection;