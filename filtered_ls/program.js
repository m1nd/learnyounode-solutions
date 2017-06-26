// Create a program that prints a list of files in a given directory,
// filtered by the extension of the files. You will be provided a directory
// name as the first argument to your program (e.g. '/path/to/dir/') and a
// file extension to filter by as the second argument.

// For example, if you get 'txt' as the second argument then you will need to
// filter the list to only files that end with .txt. Note that the second
// argument will not come prefixed with a '.'.

// Keep in mind that the first arguments of your program are not the first
// values of the process.argv array, as the first two values are reserved for
// system info by Node.

// The list of files should be printed to the console, one file per line. You
// must use asynchronous I/O.

const fs = require('fs');
const path = require('path');

const dirPath = process.argv[2];
const fileExt = `.${process.argv[3]}`;

fs.readdir(dirPath, function (err, list) {
    if (err) {
        console.log(err.message);
    }
    list.filter(function (value) {
        if (path.extname(value) === fileExt) {
            console.log(value);
        } 
    });
});
