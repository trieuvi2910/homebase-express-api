const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

// Routes for user resource
router.post('/create', userController.createUser);
router.get('/all', userController.getUsers);
router.get('/find/:id', userController.getUserById);
router.put('/update/:id', userController.updateUser);
router.delete('/delete/:id', userController.deleteUser);


module.exports = router;