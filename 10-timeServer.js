/***********************************************
 * Listen to TCP connections on the port provided in first argument.
 *********************************************** */

let input = process.argv[2];
const strftime = require('strftime');
const net = require('net');

function listener(socket) {
    console.log(strftime('%F %R'));
}

let server = net.createServer(socket => {
    console.log(socket);
});
server.listen(input);

console.log(strftime('%F %R'));
