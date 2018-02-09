/***********************************
 * Start the three async functions
 *      http.get(process.argv[2,3,4], callback)
 *      
 * the first will print automatically
 * The second will check if the first has printed, then print
 * Third will check second then print
 *       
 *********************************** */
/*******************
 * Got lucky
 ******************* */

 const http = require('http');

for (let i = 2; i < process.argv.length; i++) {
    http.get(process.argv[i], (data) => {
        data.setEncoding('utf8');
        let str = '';
        data.on('data', data => str += data);
        data.on('error', error => console.log(error));
        data.on('end', data => console.log(str));
    });
}




/***********************
 * Their answer
 *********************** */

var http = require('http')
var bl = require('bl')
var results = []
var count = 0

// Prints all results
function printResults() {
    for (var i = 0; i < 3; i++) {
        console.log(results[i])
    }
}

/***************************
 * Main function where the logic takes place
 *************************** */
function httpGet(index) {
    http.get(process.argv[2 + index], function (response) {

        // I only don't understand .pipe and bl();
        response.pipe(bl(function (err, data) {
            if (err) {
                return console.error(err)
            }

            // Converts to string and increases count
            results[index] = data.toString()
            count++
             
            // Once all three of the lines are done processing, call printResults()
            if (count === 3) {
                printResults()
            }
        }))
    })
}

// Calls the function where logic is.
// Looped so that it does it with all three of the files given
for (var i = 0; i < 3; i++) {
    httpGet(i)
}