const router = require('express').Router();
const cars = require('./cars');
const auth = require('./auth');

router.use('/cars',cars);
router.use('/auth',auth);

module.exports = router;