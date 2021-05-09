const router = require('express').Router()
const { login, register } = require('../controller/authController')
const { body } = require('express-validator')
const { validate } = require('../validators')
const { rules: registerationRules } = require('../validators/auth/register')
const { rules: loginRules } = require('../validators/auth/login')

router.post('/login', [loginRules, validate], login)

router.post('/register', [registerationRules, validate], register)

module.exports = router
