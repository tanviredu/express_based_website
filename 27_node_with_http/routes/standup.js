const express    = require("express")
const bodyParser = require("body-parser")
var   router     = express.Router()
var   mongoose   = require('mongoose')
const Standup    = require("../models/Standup")
router.use(bodyParser.json()); // support json encoded bodies
router.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies


router.get('/getstandups',(req,res)=>{
        Standup.find({})
        .exec()
        .then(docs => res.status(200).json(docs))
        .catch((err)=>res.status(400).json({
                message : "Error doing Get Process",
                
        }))
})

router.get('/getstandups/:teamMemberId',(req,res)=>{
    const qry = {
        teamMemberId: mongoose.Types.ObjectId(req.params.teamMemberId)
    }
    Standup.find(qry)
    .exec()
    .then(docs => res.status(200).json(docs))
    .catch((err)=>res.status(400).json({
            message : "Error doing Get Process",
            
    }))
})

// 5ef8056767edc62440f83d89




router.post('/poststandups',(req,res)=>{
        let standup = new Standup(req.body);
        standup.save((err,project)=>{
             if(err){
                     return res.status(400).json(err)
             }
             res.status(200).json(project);
        })
        console.log(req.body);
})


module.exports = router