/*****************
 * require fs and path
 * function to take the parameters sent by the call in fileName.js
 * check for error and send early callback(err) if there is one
 * else
 * filter files based on file type compared to extension given.
 * 
 *****************/

const fs = require('fs');
const path = require('path');
var filteredFiles = [];

function doThings(dir, ext, callback) {
    fs.readdir(dir, 'utf8', (err, files) => {
        if (err) {
            //learnyounode is saying that this should be returned. Why is that if it's calling the function?
            //is it because you don't want to continue reading the files after the error?
            return callback(err);
        }
     
        files.forEach(file => {
            if (path.extname(file) == '.' + ext) {
                filteredFiles.push(file);
            }
        });
        callback(null, filteredFiles);
    });
}



module.exports = doThings;