const fs = require('fs');

// fs.readdir() this is asynchronous
// fs.readdirSync() this is synchronous

fs.readdir('../',(err,files)=>{
    if(err){
        console.log(err);
    }else{
        // this wil execute first
        console.log("complete")
        console.log(files);
    }
})