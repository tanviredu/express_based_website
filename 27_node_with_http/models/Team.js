const mongoose = require("mongoose")

// const sizeValidate = [
//     function(val){
//         let testVal = val.trim()
//         return (testVal.length > 0 && testVal.validate<=50)
//     },
//     'Enter Valid size'
// ]


const teamSchema = new mongoose.Schema({
    name:{
        type     : String,
        required : true,
        // validate : sizeValidate
    }
})


module.exports = mongoose.model("Team",teamSchema);