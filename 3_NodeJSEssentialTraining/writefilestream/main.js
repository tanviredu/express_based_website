const fs = require('fs');

const fileName = "./test.txt";
const encoding = "utf-8"

const writeStream = fs.createWriteStream(fileName,encoding);
const readStream = fs.createWriteStream('./file.txt','utf-8');


process.stdin.pipe(writeStream)
// take the event and execute it

// readStream.on('data',(data)=>{
//     writeStream.write(data);
// })