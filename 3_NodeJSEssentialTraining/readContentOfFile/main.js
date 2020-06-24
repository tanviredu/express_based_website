const fs = require('fs');


// this is asynchronous function
const text = fs.readFile('../package.json','utf-8',(err,data)=>{
    if(err){
        throw err;
    }else{
        console.log(data);    
    }
    
});

