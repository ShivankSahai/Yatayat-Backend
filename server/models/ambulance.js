let mongoose = require('mongoose')

let Ambulance = mongoose.model('Ambulance', {
    date:{
        type:String
    },
    start_time:{
        type:String
    },
    driver_name:{
        type:String
    },
    passing_areas:{
        type:Array
    },
    police_alotted:{
        type:Array
    }
})

module.exports = { Ambulance }