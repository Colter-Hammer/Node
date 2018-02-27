/**
 * 
 * 
 */

const http = require('http');
const fs = require('fs');
let port = process.argv[2];
let path = process.argv[3];

let src = fs.createReadStream(path);

let server = http.createServer((req, res) => {
    src.pipe(res);
});
server.listen(port);