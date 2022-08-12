const express = require('express');
const router = express.Router()

const userController = require('../controllers/users.controller')

// ADD USER
router.post('/add_user', userController.addUser)

//GET ALL USERS
router.get('/', userController.getAllUsers)

// Update User
router.put('/update_user/:id', userController.updateUser)

// Delete User
router.delete('/delete_user/:id', userController.deleteUser)

//Login
router.post('/login', userController.login)

module.exports = router;