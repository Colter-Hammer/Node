/****************************
 * Purpose: print a list of files in a directory, filtered by the extension.
 * 
 * Get the array of all the file names with fs.readdir()
 * 
 * filter by the ext.  if(path.extname(fileNames) == "." + things) {return fileNames};
 * 
 * ***I don't completely understand callbacks/how to use them in my code.  I know what I want it to do, and I think I know how to get it done, but it's not working and I imagine it's because of the callback, so how can I get it working?
 ****************************/

const fs = require('fs');
const path = require('path');
const clog = console.log;

var input = process.argv;
var file = input[2];
var fileType = input[3];

var fileNames = fs.readdir(file, (err, thing) => {
    if (err) return err;
    var string = thing.toString()
    var array = string.filter(things => {
        if (path.extname(things) == '.' + fileType) {
            clog(array);
            return thing;
        }
    });
});



// fileNames.toString().filter(thing => {
//     if (path.extname(thing) == '.' + things) {
//         return thing;
//     }
// });