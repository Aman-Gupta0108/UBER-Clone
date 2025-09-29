const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const captainSchema = new mongoose.Schema({
    fullname:{
        firstname:{
            type:String,
            require:true,
            minlenght:[3,'Firstname must be at least 3 characters long']
        },
        lastname:{
            type:String,
            minlenght:[3,'Lastname must be at least 3 characters long'],
        }
    },
    email:{
        type:String,
        require:true,
        unique:true,
        lowercase:true,
        match:[/^\S+@\S+\.\S+$/,'please enter a valid email']
    },
    password:{
        type:String,
        require:true,
        select:false,
    },

    socketId:{
        type:String,
    },
    status:{
        type:String,
        enum:['active','inactive'],
        default:'inactive',
    },
    vehicle:{
        color:{
            type:String,
            require:true,
            minlenght:[3,'Color must be at least 3 characters long'],
        },
        plate:{
            type:String,
            require:true,
            minlenght:[3,'Plate must be at least 3 Charactures long'],
        },
        capacity:{
            type:Number,
            require:true,
            min:[1,'Capacity must be at least 1']
        },
        vehicleType:{
            type:String,
            require:true,
            enum:['car','motorcycle','auto']
        }
    },
    location:{
        lat:{
            type:Number,

        },
        lng:{
            type:Number
        }
    }
})

captainSchema.methods.generateAuthToken = function(){
    const token = jwt.sign({'_id':this.id},process.env.JWT_SECRET,{expiresIn:'24h'})
    return token;
}
// method is work on the basise of document
captainSchema.methods.comparePassword = async function(password){
    return await bcrypt.compare(password,this.password)
}
// static work on the basise of model
captainSchema.statics.hashPassword=async function (password){
    return await bcrypt.hash(password,10);
}
const captainModel = mongoose.model('captain',captainSchema)
 

module.exports = captainModel; 


// ssh-keygen -t ed25519 -C "amangupta.01008@gmail.com"
// ssh-keygen -t ed25519 -C "your_email@example.com"
