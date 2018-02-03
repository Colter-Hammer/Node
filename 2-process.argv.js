/**
 * use process.argv to recieve input from cmd
 * Loop through to get the sum
 */

var sum = 0;

for (let i = 2; i < process.argv.length; i++) {
    sum += parseInt(process.argv[i]);
}

console.log(sum);