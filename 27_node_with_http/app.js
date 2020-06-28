const express    = require("express")
const path       = require("path")
const logger     = require("morgan")
const mongoose   = require("mongoose")
const config     = require("./config")
const bodyParser = require("body-parser")
const app        = express()



const projectRouter = require("./routes/project") 
const teamRouter    = require("./routes/team")
const standupRouter = require("./routes/standup")


app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/projects',projectRouter);
app.use('/teams',teamRouter);
app.use('/standups',standupRouter);








const url     = config.mongoUrl;
const connect = mongoose.connect(url);
connect.then((db)=>{
    console.log("[+] Connect to database");
    console.log("[+] Starting the Server .....");
    app.listen(8000,()=>{
        console.log("[*] Server Started");
    });
})