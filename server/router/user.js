const { userController } = require('../controllers');

const router = require('express').Router();

router.get('/:id', userController.getUser);
router.patch('/:id', userController.changePassword)

module.exports = router;