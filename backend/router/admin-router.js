const express = require('express')
const router = express.Router()

const adminController = require('../controllers/admin-controller')
const authMiddleware = require('../middlewares/auth-middleware')


router.get('/users', authMiddleware, adminController.getAllUsers)
router.get("/users/:id", authMiddleware, adminController.getUserByID)
router.patch("/users/update/:id", authMiddleware, adminController.updateUserById)
router.delete('/users/delete/:id', authMiddleware, adminController.deleteUserById)
router.get('/contacts', authMiddleware, adminController.getAllContacts);
router.delete('/contacts/delete/:id', authMiddleware, adminController.deleteContactById)



module.exports = router