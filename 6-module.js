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
var number = [];

function doThings(dir, ext, callback) {
    fs.readdir(dir, 'utf8', (err, files) => {
        if (err) {
            return callback(err);
        }
        files.forEach(file => {
            if (path.extname(file) == '.' + ext) {
                number += file;
            }
            return callback(null, number);
        });
    });
}



module.exports = doThings;