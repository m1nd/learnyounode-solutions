// Write a program that accepts one or more numbers as command-line arguments 
// and prints the sum of those numbers to the console (stdout).

const arg = process.argv.splice(2);
console.log(arg.reduce(function (x, y) { 
        return Number(x) + Number(y); 
    })
);
