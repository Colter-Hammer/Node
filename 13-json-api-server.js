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

let myurl = ('api/parsetime?iso=2013-08-12T12:10:12.474Z');

let things = myurl.toString().split('=');
// // let MYDDate = new Date(dates[1]);
// console.log(dates[1]);




let parsed = URL.parse(myurl);
let query = parsed.query.split('=');
let time = Array.from(query[1].split('T')[1]);
time.splice(time.length - 1, 1);
stuff = time.join('');

let dates = new Date(stuff);
// Array.from(time[1]);

console.log(dates);
