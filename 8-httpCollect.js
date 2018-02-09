/******************
 * Perform an HTTP GET request to a url (process.argv[2])
 * Collect all the data from the server
 * Write two lines to the console
 *  1. An integer with the number of characters received from the server
 *      *
 *  2. A complete String of characters received from the server
 * 
 ******************/

const http = require('http');

let url = process.argv[2];

http.get(url, respond).on('error', error => console.log(error));

function respond(res) {
    let string = '';
    res.on('data', (data) => {
        let stringData = data.toString();
        string += stringData;
    });
    res.on('error', (error) => console.log(error));
    res.on('end', (data) => {
        console.log(string.length);
        console.log(string);
    })}