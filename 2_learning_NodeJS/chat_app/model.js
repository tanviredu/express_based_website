const mongoose = require('mongoose')

// make the schema
var Message = mongoose.model('chatting',{
    //scheme goes here
    name:String,
    message:String

})

module.exports = Message;