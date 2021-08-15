const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
    location: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    transmission: {
        type: String,
        required: true
    },
    hp: {
        type: Number,
        required: true
    },
    doors: {
        type: Number,
        required: true
    },
    seats: {
        type: Number,
        required: true
    },
    fuel: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    imageUrl: {
        type: String
    },
    savedBy: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        default: []
    }],
    rentedBy: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        default: []
    }],
});

module.exports = mongoose.model('Car', carSchema);