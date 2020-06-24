// the program wil be run like this
//node grabargv --firstname tanvir --lastname tahman
// grab the value of it


const grab = (flag)=>{
    var indexAfterFlag = process.argv.indexOf(flag)+1;
    return process.argv[indexAfterFlag];
}


const firstname = grab('--firstname');
const lastname = grab('--lastname');

console.log(`the fulname is ${firstname+" "+lastname}`)


// now it can be used to do any order with 
// proper flag



