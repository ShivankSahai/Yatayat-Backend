let mongoose = require('mongoose')

mongoose.Promise = global.Promise
mongoose.connect('mongodb://ShivankSahai:shivank411@ds127655.mlab.com:27655/yatayat' || 'mongodb://localhost:27017/TodoApp')

module.exports={mongoose}