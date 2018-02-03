/**
 * require('fs'); 
 */
// Redoing it to be shorter
const fs = require('fs');

var input = fs.readFileSync(process.argv[2]);
var output = input.toString().split('\n').length - 1;
console.log(output);

// My original try
//
// const fs = require('fs');
// var input = process.argv;
// var file = input[2];
// var readFile = fs.readFileSync(file);
// var string = readFile.toString();
// var thing = string.split('\n');
// var total = thing.length - 1;
// console.log(total);