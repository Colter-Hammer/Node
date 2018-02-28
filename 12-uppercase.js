/**
 * write HTTP server that gets input, and changes it to uppercase
 * 
 * server should listen on process.argv[2]
 */

const http = require('http');
let port = process.argv[2];

var map = require('through2-map')

let server = http.createServer((req, res) => {
    if (req.method !== 'POST') res.end('send a POST\n');

    req.pipe(map(function (chunk) {
        return chunk.toString().toUpperCase();
    })).pipe(res);
});
server.listen(port);