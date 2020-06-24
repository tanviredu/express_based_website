const path = require('path'); //loading the path module
const { profileEnd } = require('console');
// the console is a global object 
console.log("this is the first");
console.log("console is a global object");
global.console.log("this is also valid");
//  some global vriabele
console.log(__dirname); // this will  return the currently directory name
console.log(__filename); // this will return the current filename
// this will called the fine name 
// but it actually return the whole path
//to find path we can import the path module

// to pluck the filename obly we use the path.basename()

console.log(`the Filename is "${path.basename(__filename)}" `);


// process object is alsoa  global object
// no need to import
// this  is used to fine the version of the node js and the process id

// this will return the current process id
console.log(process.pid);
console.log(process.versions.node);

// it wil give the information about the current process
console.log(process.versions);


// in order to collect information from the argument 
// is also plucked with the process variable
console.log(process.argv)

// it will by default return the two parameter 
// 1) the node runtime 
// 2) the current process file

// make a small program

var myfunc = ()=>{
        var firstname = process.argv[2];
        var lastname  = process.argv[3];
        var Fullname = firstname+" "+lastname
        return Fullname;
}


var name = myfunc();




// run the program like this 
// node index.js tanvir rahman

console.log(`The name is ${name}`);

console.log(`the current module Name ${process.argv[1]}`);


// destructuring  the value of the process.argc variabel
// this is the arrau packing and unpacking 
// in node it is call destructuring
const [,,firstname,lastname] = process.argv;

console.log(firstname);
console.log(lastname);