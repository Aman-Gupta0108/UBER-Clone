const mongoose = require('mongoose')

function connectToDb(){
    mongoose.connect(process.env.DB_CONNECT)
    .then(console.log('db connect '))
    .catch(err => console.log(err))
}
module.exports = connectToDb

// ,{userNewUrlParser:true,useUnifideTopology:true}