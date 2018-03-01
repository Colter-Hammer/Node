// /**
//  * HTTP server that serves JSON data when recieves a GET req to '/api/parsetime'
//  * 
//  * Should have two endpoints
//  *  1. respond with hour, minute, and second properties
//  *  2. respond with unixtime
//  * 
//  * Listen on port provided in process.argv[2];
//  * 
//  */

const URL = require('url');
const http = require('http');

let server = http.createServer((req, res) => {
    let parsed = URL.parse(req.url, true).query.iso;
    console.log(parsed);
    let dates = new Date(parsed);
    console.log(dates);

    let hour = dates.getHours();
    let minute = dates.getMinutes();
    let seconds = dates.getSeconds();

    let dateThing = {
        "hour": hour,
        "minute": minute,
        "second": seconds
    }

    let unixtime = {
        "unixtime": dates.getTime()
    };
    console.log(JSON.stringify(dateThing, null, 2));
    console.log(JSON.stringify(unixtime, null, 2));
});
server.listen(process.argv[2]);