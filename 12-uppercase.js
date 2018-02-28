/**
 * write HTTP server that gets input, and changes it to uppercase
 * 
 * server should listen on process.argv[2]
 */

const http = require('http');
let port = process.argv[2];

http.createServer((req, res) => {
    req.toString().toUpperCase();
});