const express = require('express')
const router = express.Router()
const {body}= require('express-validator')
const captainController = require('../controllers/captain.controller')

router.post('/register',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({min:3}).withMessage('First name must be at least 3 charaters long'),
    body('password').isLength({min:6}).withMessage('Password must be at least 6 charactor long'),
    body('vehicle.color').isLength({min:3}).withMessage('Color must be at least 3 character'),
    body('vehicle.plate').isLength({min:3}).withMessage('plate must be least 3 characters'),
    body('vehicle.capacity').isInt({min:1}).withMessage('Capacity must be at least 1'),
    body('vehicle.vehicleType').isIn(['car','motorcycle','auto']).withMessage('Invalid Vehicle'),
   
],
captainController.registerCaptain
)

module.exports = router;