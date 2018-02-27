/***********************************************
 * Listen to TCP connections on the port provided in first argument.
 *********************************************** */

let port = process.argv[2];
const strftime = require('strftime');
const net = require('net');
let time = strftime('%F %R\n');

let server = net.createServer(socket => {
    socket.end(time);
});
server.listen(port);
