const { carModel } = require('../models');

async function createCar(req,res){
    const carData = {
        model: req.body.model,
        year: req.body.year,
        transmission: req.body.transmission,
        doors: req.body.doors,
        seats: req.body.seats,
        fuel: req.body.fuel,
        price: req.body.price,
        imageUrl: req.body.imageUrl,
    }
    await carModel.create(carData);

    res.send();
}

async function getCars(req,res){
    const cars = await carModel.find({});
    res.status(200).json(cars)
}

module.exports = {
    createCar,
    getCars
}