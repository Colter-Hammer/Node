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

function doThings(dir, ext) {
    return 'stuff';
}
console.log(doThings());

module.exports = doThings;