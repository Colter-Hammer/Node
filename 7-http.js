const http = require('http');

let url = process.argv[2];

http.get(url, response);

function response(res) {
    res.setEncoding('utf8');
    res.on('data', (data) => console.log(data));
    res.on('end', (data) => console.log("Yo done fool"));
}