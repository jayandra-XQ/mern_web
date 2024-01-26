const express = require('express')
const router = express.Router()

const adminController = require('../controllers/admin-controller')
const authMiddleware = require('../middlewares/auth-middleware')


router.get('/users', authMiddleware, adminController.getAllUsers)
router.get('/contacts', authMiddleware, adminController.getAllContacts);



module.exports = router