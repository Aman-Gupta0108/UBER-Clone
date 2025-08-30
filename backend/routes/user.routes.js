const express = require('express')
const router = express.Router()
const userController = require('../controllers/user.controller')
// express validater
const {body} = require('express-validator')

router.post('/register',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({min:3}).withMessage('First name must be at least 3 character long'),
    body('password').isLength({min:6}).withMessage('password must be at least 6 characters long')

],
userController.registerUser
)

router.post('/login',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({min:6}).withMessage('password must be at least 6 characters long')
],
        userController.loginUser
)
module.exports = router;