// every file is considered as a module
const path = require('path');

//  the current directory name is
console.log(__dirname); // return the current directory name
console.log(__filename); // return the current file name 

//we use the basename functionality
// to only fetch the filename

const filename = path.basename(__filename);
console.log(filename);
