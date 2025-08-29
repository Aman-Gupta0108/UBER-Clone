const userModel = require('../model/user.model')
const userService = require('../service/user.service')

//express validator
const {validationResult} = require('express-validator')

module.exports.registerUser = async (req,res,next)=>{
    const error = validationResult(req);
    if(!error.isEmpty()){
        return res.status(400).json({error:error.array()})
    }

    const { fullname, email, password}=req.body;

    console.log(req.body)

    const hashPassword = await userModel.hashPassword(password);

    const user = await userService.createUser({
        firstname:fullname.firstname,
        lastname:fullname.lastname,
        email,
        password:hashPassword,
    });

    const token = userModel.generateAuthToken
    res.status(201).json({token,user})
}