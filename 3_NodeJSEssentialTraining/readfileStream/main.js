const fs = require('fs');




// remember this is a event object
// this is asynchronous and an event
const readstream = fs.createReadStream('../package.json','utf-8');

// make a event listener
// now we exexute the stream
readstream.on('data',(res)=>{
    console.log(res);
    console.log("=-----=")
})