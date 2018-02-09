const http = require('http');

let url = process.argv[2];

http.get(url, response);

function response(res) {
    res.setEncoding('utf8');
    let string = [];
    res.on('data', (data) => {
        string.push(data);
    });
    res.on('end', (data) => {
        console.log(string);
    });
}