const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    number: {
        type: String,
        required: true
    },
    hashedPassword: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: 'user'
    },
    savedCars: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Car",
        default: []
    }],
    rentedCars: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Car",
        default: []
    }]
})

module.exports = mongoose.model('User', userSchema);