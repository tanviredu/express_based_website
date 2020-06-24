// import the readline
const readline = require('readline');

// create an interface
const rl = readline.createInterface({
    input  : process.stdin,
    output : process.stdout
});

// make th e question list
const questions = [
    "what is your name ? ",
    "where do you live ? ",
    "what are you going to do with node"
];

// done is a callback function
// make a function of collecting ans with a callback function "done"

// this is a recursive function
const collectanswer = (questions,done)=>{
        const answers = [];
        const [firstQuestion] = questions;

        const questionAnswered = answer =>{
            answers.push(answer);
            //length is 1 bigger than the index
            if(answers.length < questions.length){
                rl.question(questions[answers.length],questionAnswered);
            }else{
                done(answers);
            }
        };
        // this is like a recursive function
        // when it done we just call the callbackfunction
        // with the answers
        // it will take a quesiton and then pass the questionanwered
        // functon it will store the arry
        // and store it the ans and take the next question
        // and when it finished it willcall the callback function
        
        rl.question(firstQuestion,questionAnswered);
}



// the (ans) is the done function implementation 
// the ans of the callback function wilbe catch by the parameter ans 
collectanswer(questions,(ans)=>{
    console.log("thank you for your ans");
    console.log(ans);
    process.exit();
});