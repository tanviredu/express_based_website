const express    = require("express")
const bodyParser = require("body-parser")
var   router     = express.Router()
const Project    = require("../models/Project")
router.use(bodyParser.json()); // support json encoded bodies
router.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies


router.get('/getprojects',(req,res)=>{
        Project.find({})
        .exec()
        .then(docs => res.status(200).json(docs))
        .catch((err)=>res.status(400).json({
                message : "Error doing Get Process",
                
        }))
})

router.post('/postprojects',(req,res)=>{
        let project = new Project(req.body);
        project.save((err,project)=>{
             if(err){
                     return res.status(400).json(err)
             }
             res.status(200).json(project);
        })
        console.log(req.body);
})


module.exports = router