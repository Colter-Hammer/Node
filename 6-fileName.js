/*********************
 * import 6-module.js
 * define the directory and file extension for use as parameters
 * call the function
 * console.log(data returned with function)
 *********************/
const practice = require('./6-module.js');

let dir = process.argv[2];
let ext = process.argv[3];

let jello = practice.doThings(dir, ext);
console.log(jello);