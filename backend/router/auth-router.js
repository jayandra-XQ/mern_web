const express = require('express')
const router = express.Router()
const authControllers = require('../controllers/auth-controller')
const validate = require("../middlewares/validate-middleware")
const signupSchema = require("../validators/auth-validator")


router.get('/', authControllers.home)
router.post('/register', validate(signupSchema), authControllers.register)


router.post('/login', authControllers.login)


module.exports = router