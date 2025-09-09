
const captainModel = require('../model/captain.model.js');
const captainService = require('../service/captain.service.js')
const {validationResult} = require('express-validator');


module.exports.registerCaptain = async (req, res, next )=>{
    const error = validationResult(req);
    if(!error.isEmpty()){
        return res.status(400).json({error:error.array()})
    }

    const {fullname, email, password, vehicle} =req.body;

    const isCaptainAlreadyExist = await captainModel.findOne({email})
    if(isCaptainAlreadyExist){
        return res.status(400).json({message:'Captain already exist'})
    }

    const hashedPassword = await captainModel.hashPassword(password)

    const captain = await captainService.createCaptain({
        firstname:fullname.firstname,
        lastname:fullname.lastname,
        email,
        password:hashedPassword,
        color:vehicle.color,
        plate:vehicle.plate,
        capacity:vehicle.capacity,
        vehicleType:vehicle.vehicleType
    })

    const token = captain.generateAuthToken()
    console.log(token)
    res.status(201).json({token,captain})
}