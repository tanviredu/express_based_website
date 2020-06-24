// all the core nodu module
const path  = require('path');
const utils = require('util'); 
// make a full path with the filder
const diruploades = path.join(__dirname,"www","files","uploades");
console.log(diruploades);
// one of the most important in the util function
// is the logging function
// it will log with time and data
// this is used to make the login informaton
utils.log(diruploades);
// you dont need to import the whole node packages
const {log} = require('util');
log(__dirname);
