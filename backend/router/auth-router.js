const express = require('express')
const router = express.Router()
const authControllers = require('../controllers/auth-controller')


router.get('/', authControllers.home)
router.get('/register', authControllers.register)


module.exports = router