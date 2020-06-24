const questions = [
    "What is your name ?",
    "What is your department ?",
    "What is your id ?"

];


// setting up the default value
// so it will start with the first
const ask = (i=0)=>{
    // thiswill write on the terminal
    process.stdout.write(`\n ${questions[i]}`);
    process.stdout.write(`\n >`);
}


ask();
// we make a event listener to take the data from
// standered input whaich is theterminal

// make a event and give the event name 'data' 


// remeber this is a event listener 
// not a event emitter
// so it will not emit the data
// it will recieve it
const answers = [];
process.stdin.on('data',(result)=>{
         // sothe event name 'data' will store the 
         // value of the input in result
         // take the ans from the event listener 
         // and push it to array
         answers.push(result.toString().trim());

         // check is all the question got the ans
         if(answers.length < questions.length){
             // then ask the next question
             ask(answers.length)
         }else{
             process.exit();
         }
        
})


// make another eventlistener to show the ans array
// before the process

process.on('exit',()=>{

    const [name,department,ID] = answers;
    console.log(`

    Your name       : ${name}
    Your Department : ${department}
    Your Id         : ${ID}
    

    `);

})