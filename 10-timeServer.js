/***********************************************
 * Listen to TCP connections on the port provided in first argument.
 *********************************************** */

let input = process.argv[2];
const strftime = require('strftime');
const net = require('net');
let time = strftime('%F %R');

function listener(socket) {

}

let server = net.createServer(socket => {
    socket.end(time);
});
server.listen(input);
