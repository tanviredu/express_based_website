const mongoose = require('mongoose')

const standSchema = new mongoose.Schema({
    teamMemberId : {
        type     : mongoose.Schema.Types.ObjectId,
        ref      : 'teams'
    },
    teamMember   : {
        type     : String,
        required : true
    },
    project      : {
        type     : String,
        required : true
    },
    workYesterday: {
        type     : String,
        required : true
    },
    workToday    : {
        type     : String,
        required : true
    },
    impediment   : {
        type     : String,
        required : true
    },
    createdOn    : {
        type     : Date,
        default  : Date.now
    }

})

module.exports = mongoose.model("Standup",standSchema)