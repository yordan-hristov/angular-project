const { carsController } = require('../controllers');

const router = require('express').Router();

router.get('/', carsController.getCars);
router.get('/:id', carsController.getCarById)

router.post('/', carsController.createCar);

router.patch('/:id/save', carsController.saveCar); 
router.patch('/:id/rent', carsController.rentCar); 
router.patch('/:id/removeSaved', carsController.removeSavedCar); 
router.patch('/:id/removeRented', carsController.removeRentedCar); 

module.exports = router;