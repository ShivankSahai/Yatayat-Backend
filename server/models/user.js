let mongoose = require('mongoose')

let User = mongoose.model('User', {
    name:{
        type:String
    },
    email:{
        type:String
    },
    aadhar:{
        type:Number
    },
    password:{
        type:String
    }
})

module.exports = { User }