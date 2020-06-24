const fs = require('fs');

// delete everything in the directory
// you have to do it in synce because
// you cant remove the directory unless
// you remove every file of it
fs.readdirSync('./testfolder').forEach(file=>{
    fs.unlinkSync(`./testfolder/${file}`);
});

// now delete the folder
// now you can do it in the asynchronous way
fs.rmdir('./testfolder',(err)=>{
    if(err){
        throw err;
    }else{
        console.log("deleted");
    }
})