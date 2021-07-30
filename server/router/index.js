const router = require('express').Router();
const cars = require('./cars');

router.use('/cars',cars);

module.exports = router;