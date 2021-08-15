const { carModel } = require('../models');
const { userModel } = require('../models');

const IMG_URL = process.env.IMG_URL;

async function createCar(req, res) {
    const carData = {
        location: req.body.location,
        brand: req.body.brand,
        model: req.body.model,
        year: req.body.year,
        transmission: req.body.transmission,
        hp: req.body.hp,
        doors: req.body.doors,
        seats: req.body.seats,
        fuel: req.body.fuel,
        price: req.body.price,
        imageUrl: IMG_URL + req.body.img,
    }
    await carModel.create(carData);

    res.send();
}

async function getCars(req, res) {
    const filter = {
        location: req.query.location
    }
    if(req.query.brand !== "All"){
        filter.brand = req.query.brand;
    }

    const cars = await carModel.find(filter);

    res.send(cars);
}

async function getCarById(req, res) {
    const car = await carModel.findById(req.params.id);

    res.send(car);
}

async function saveCar(req, res) {
    const { userId, carId } = req.body;
    const user = await userModel.findById(userId);
    const car = await carModel.findById(carId);

    user.savedCars.push(carId);
    car.savedBy.push(userId);

    await user.save();
    await car.save();

    res.end();
}

async function rentCar(req, res) {
    const { userId, carId } = req.body;
    const user = await userModel.findById(userId);
    const car = await carModel.findById(carId);

    user.rentedCars.push(carId);
    car.rentedBy.push(userId);

    await user.save();
    await car.save();

    res.end();
}

async function removeSavedCar(req, res) {
    const { userId, carId } = req.body;
    const user = await userModel.findOneAndUpdate(
        { _id: userId },
        { $pull: { savedCars: carId } },
        { new: true }
    );

    const car = await carModel.findOneAndUpdate(
        { _id: carId },
        { $pull: { savedBy: userId } },
        { new: true }
    );

    await user.save();
    await car.save();

    res.end();
}

async function removeRentedCar(req, res) {
    const { userId, carId } = req.body;
    const user = await userModel.findOneAndUpdate(
        { _id: userId },
        { $pull: { rentedCars: carId } },
        { new: true }
    );

    const car = await carModel.findOneAndUpdate(
        { _id: carId },
        { $pull: { rentedBy: userId } },
        { new: true }
    );

    await user.save();
    await car.save();

    res.end();
}

module.exports = {
    createCar,
    getCars,
    getCarById,
    saveCar,
    rentCar,
    removeSavedCar,
    removeRentedCar
}