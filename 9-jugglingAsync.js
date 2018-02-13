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
var list = process.argv;
var array = [];
var count = 0;

function printResult() {
    for (var i = 0; i < list.length - 2; i++) {
        console.log(array[i]);
    }
}

for (var i = 0; i < list.length - 2; i++) {
    let str = '';
    let x = i;
    http.get(list[2 + x], data => {
        data.setEncoding('utf8');
        data.on('data', data => str += data);
        data.on('error', error => {
            console.log(error);
        });
        data.on('end', () => {
            array[x] = str;
            // console.log(str);
            // console.log(array);
            count++;
            if (count == 3) {
                printResult();
                // console.log(array);
            }
        });
    });
}


// //this works
// function httpGet(index) {
//     http.get(list[2 + index], data => {
//         var str = '';
//         data.setEncoding('utf8');
//         data.on('data', data => str += data);
//         data.on('error', error => {
//             console.log(error);
//         });
//         data.on('end', (data) => {
//             array[index] = str;
//             // console.log(str);
//             // console.log(array);
//             count++;
//             if (count == 3) {
//                 printResult();
//                 // console.log(array);
//             }
//         });
//     });
// }

// for (var i = 0; i < list.length - 2; i++) {
//     httpGet(i);
// }



/***********************
 * Their answer
 *********************** */

// var http = require('http')
// var bl = require('bl')
// var results = []
// var count = 0

// // Prints all results
// function printResults() {
//     for (var i = 0; i < 3; i++) {
//         console.log(results[i])
//     }
// }

// /***************************
//  * Main function where the logic takes place
//  *************************** */
// function httpGet(index) {
//     http.get(process.argv[2 + index], function (response) {

//         // I only don't understand .pipe and bl();
//         response.pipe(bl(function (err, data) {
//             if (err) {
//                 return console.error(err)
//             }

//             // Converts to string and increases count
//             results[index] = data.toString()
//             count++

//             // Once all three of the lines are done processing, call printResults()
//             if (count === 3) {
//                 printResults()
//             }
//         }))
//     })
// }

// // Calls the function where logic is.
// // Looped so that it does it with all three of the files given
// for (var i = 0; i < 3; i++) {
//     httpGet(i)
// }