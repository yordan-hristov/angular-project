const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
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
    }
});

module.exports = mongoose.model('Car', carSchema);