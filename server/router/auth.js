const { authController } = require('../controllers')

const router = require('express').Router();

router.post('/register', authController.register);
router.post('/login', authController.login);
router.post('/logout', authController.logout);

module.exports = router