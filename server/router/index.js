const router = require('express').Router();
const cars = require('./cars');
const auth = require('./auth');
const user = require('./user')

router.use('/cars',cars);
router.use('/auth',auth);
router.use('/user',user)

module.exports = router;