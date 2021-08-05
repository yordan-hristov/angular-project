const { carsController } = require('../controllers');

const router = require('express').Router();

router.get('/', carsController.getCars)

router.post('/', carsController.createCar)

module.exports = router;