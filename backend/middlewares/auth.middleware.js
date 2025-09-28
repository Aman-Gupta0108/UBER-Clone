const userModel = require('../model/user.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const blacklistTokenModel = require('../model/blacklistToken.model')
const captainModel = require('../model/captain.model')


module.exports.authUser = async (req,res,next)=>{
    const token  = req.cookies.token || req.headers.authorization?.split(' ')[1];
    // always share authorization token with bearer
    // console.log(req.headers.authorization)
    console.log(token , 'tokrn')
    if(!token){ 

        return res.status(401).json({message:'Unauthorized token not found '})
    }
    const isBlacklisted = await blacklistTokenModel.findOne({token})
    if(isBlacklisted){
         return res.status(401).json({message:'Unauthorized back'})
    }
    try {
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        const user = await userModel.findById(decoded._id)
        req.user = user;
        return next(); 
    } catch (error) {
        return res.status(401).json({message:'Unauthorized user not found'})
    }
}

module.exports.authCaptain = async(req,res,next)=>{
    const token  = req.cookies.token || req.headers.authorization?.split(' ')[1]; 
     if(!token){ 
        return res.status(401).json({message:'Unauthorized captain token not found'})
    }
    const isBlacklisted = await blacklistTokenModel.findOne({token})
    if(isBlacklisted){
         return res.status(401).json({message:'Unauthorized is black'})
    }

     try {
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        const captain = await captainModel.findById(decoded._id)
        req.captain = captain;
        return next(); 
    } catch (error) {
        return res.status(401).json({message:'Unauthorized captain not found'})
    }

}