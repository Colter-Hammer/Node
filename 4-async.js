/**
 * Use one Async filesystem operation to read and print the number of newlines to the console.
 * the file-path will be given as process.argv[2];
 * async using fs.readFile()
 */

const fs = require('fs');
const log = console.log;

let input = fs.readFile(process.argv[2], (err, file) => {
    if (err) return err;
    log(file.toString().split('\n').length -1);
});