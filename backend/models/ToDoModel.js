const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
  text:{
    type:String,
    require: true,
    minlength: 1,
  
  }
})

module.exports = mongoose.model('ToDo', todoSchema);