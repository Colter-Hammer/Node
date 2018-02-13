/****************************
 * Purpose: print a list of files in a directory, filtered by the extension.
 * 
 * Get the array of all the file names with fs.readdir()
 * 
 * filter by the ext.  if(path.extname(fileNames) == "." + things) {return fileNames};
 * 
 * Callback logic can either be used inline with the async code, or you can do the logic of the function seperately and use the function as long as you have the correct error handling. 
 ****************************/

const fs = require('fs');
const path = require('path');
const clog = console.log;

var dir = process.argv[2];
var fileType = process.argv[3];
// clog(input);

fs.readdir(dir, (err, files) => {
    if (err) {
        clog(err);
        return;
    }

    files.forEach(file => {
        if (path.extname(file) == '.' + fileType) {
            clog(file);
        }
    });
});


//***** 
// function extension(err, files) {
//     if (err) {
//         clog(err);
//         return;
//     }

//     let answer = files.filter(file => {
//         return path.extname(file) == '.' + fileType;
//     });
//     answer.forEach(file => clog(file));
// }