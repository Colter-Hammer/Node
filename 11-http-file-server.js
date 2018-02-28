const http = require('http');
const fs = require('fs');

let src = fs.createReadStream(process.argv[3]);

let server = http.createServer((req, res) => {
    src.pipe(res);
});
server.listen(process.argv[2 ]);