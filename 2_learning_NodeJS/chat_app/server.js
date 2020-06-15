const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
// add the app with the server
var http = require('http').Server(app);
const io = require('socket.io')(http);
const Message = require('./model');
var url = 'mongodb://127.0.0.1/chatting'

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))
const port = 80;

mongoose.connect(url,{ useNewUrlParser: true });
mongoose.Promise = global.Promise;
mongoose.connection.on("error", error => {
    console.log('Problem connection to the database'+error);
});

app.get('/messages',(req,res)=>{
    Message.find({},(err,message)=>{
        res.send(message);
    })

})


// make a user based search
app.get('/messages/:user',(req,res)=>{
    // take the user from the url 
    var user = String(req.params.user);
    Message.find({"name":user},(err,message)=>{
        res.send(message);
    })

})



app.post('/messages', async (req,res)=>{
    var mg = new Message(req.body);
    //console.log(mg);
    var saved_mg = await mg.save();
    console.log("saved'");

    // making a  event listener
    // emits a event with the posted 
    // message with the name mesage
    io.emit('message',req.body);
    res.sendStatus(200);
    
})




// use the static and html
// in the current directory
app.use(express.static(__dirname));

http.listen(port,()=>{
    console.log("[*] server is started")
})