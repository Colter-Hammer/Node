/*********************
 * import 6-module.js
 * define the directory and file extension for use as parameters
 * call the function
 * console.log(data returned with function)
 *********************/
const doThings = require('./6-module.js');

let dir = process.argv[2];
let ext = process.argv[3];

let jello = doThings(dir, ext, (err, files) => {
    if(err) return(console.log(err));
    files.forEach(files => console.log(files));
});
