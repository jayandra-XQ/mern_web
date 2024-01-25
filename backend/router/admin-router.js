const express = require('express')
const getAllUsers = require('../controllers/admin-controller')
const getAllContacts = require('../controllers/admin-controller')

const router = express.Router()

router.get('/users', getAllUsers)
router.get('/contacts', getAllContacts);



module.exports = router