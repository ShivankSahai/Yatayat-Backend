let mongoose = require('mongoose')

let AccidentCom = mongoose.model('AccidentCom', {
    date:{
        type:String
    },
    time:{
        type:String
    },
    latitude:{
        type:Number
    },
    longitude:{
        type:Number
    },
    level:{
        type:String
    },
    who_requested:{
        type:String
    },
    hospital_alerted:{
        type:String
    }
})

module.exports = { AccidentCom }