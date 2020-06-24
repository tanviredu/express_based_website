const readline = require('readline');

// lets lof everythin in the core module
//console.log(readline);

// make an interface for the input output
// remember 
const r1 = readline.createInterface({
        // now set the interface
        // for the input and output
        input  : process.stdin, // set the input to the  standerd input
        output : process.stdout

 });

 // then you dot a object with a method 
 // of question() what will works as taking an input
 // and you get the output as a callback function
 r1.question('what is your name ?? \n >',(ans)=>{
     if (ans.length <=0){
         console.log(" you did not type anytinh");
     }else{
         console.log(`your ans is ${ans}`);
     }
 })
