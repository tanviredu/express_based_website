const waitTime = 3000;
const waitInterval = 500;
let currentTime = 0;// this will be changed so cant make the const

const incTime = ()=>{
    currentTime +=waitInterval;
    //console.log(`waiting ${currentTime/1000} seconds `);
    // make  apercentage how much time is passed
    const p  = Math.floor((currentTime/waitTime)*100)
    process.stdout.clearLine();
    // change the cursor so the result will
    // change at the same line insted of appending 
    // inth second line
    process.stdout.cursorTo(0);
    process.stdout.write(`waiting... ${p} %`);

    
}


const timerFinished = ()=>{
    console.log("done")


}


const interval = setInterval(incTime,waitInterval);

// did the consolelog run?
// yes because it is asynchronous
// so when the setinter is workign 
// during rhe delay it will execute it
// console.log(interval);

// now if we call a set Timeout function
// will it run yes because it will run in another thred
// because the set interval is not blocking the other code
// both will run independently

//setTimeout(timerFinished,waitTime);

// it wil run only once after 3 seconds
// er can do more things since it runs a different thread
// in this function we can actually
// clear the previous setInterval  so after 3 seconds it 
// interval will stop


const timerFinishedwithclearinterval = ()=>{
    clearInterval(interval);
    console.log("done and timer is cleared");


}

setTimeout(timerFinishedwithclearinterval,10000);