// this timer function is also 
// an asynchronous function
const timeDelay = 3000; // that means three second

const functionAfterDelay = ()=>{
        console.log(`Time is delayed by ${timeDelay/1000} seconds`);
}

// it will execute this function
// after 3 second delay
// there is also delayfunction
setTimeout(functionAfterDelay,timeDelay);
setInterval(functionAfterDelay,timeDelay);