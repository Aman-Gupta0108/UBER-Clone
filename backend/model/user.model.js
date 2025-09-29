const mongoose= require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const UserSchema = mongoose.Schema({
    fullname:{
        firstname:{
            type:String,
            require:true,
            // [first is condition value , and second is error message ]
            minlength:[3,'First name must be at least 3 characters long'],
        },
        lastname:{
            type:String,        
            minlength:[3,'First name must be at least 3 characters long'],
        }
        },
        email:{
            type:String,
            required:true,
            unique:true,
            minlength:[5,'Email must be at least 5 Characters long']
        },
        password:{
            type:String,
            require:true,
            select:false //is ka mtlb hai jb bhi user ko find kare ge to password ko leke mat jana 
        },
        socketId:{
            type:String
        }
    
})

UserSchema.methods.generateAuthToken = function(){
    const token = jwt.sign({_id:this._id},process.env.JWT_SECRET,{expiresIn:'24h'})
    
    return token 
}
// method used in document level

UserSchema.methods.comparePassword = async function(password){
    return await bcrypt.compare(password,this.password)
}

UserSchema.statics.hashPassword = async function (password){
    return await bcrypt.hash(password,10)
}
//state used at model level

const userModel = mongoose.model('user',UserSchema)
module.exports = userModel;