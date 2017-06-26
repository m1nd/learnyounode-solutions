// Write a program that performs an HTTP GET request to a URL provided to you
// as the first command-line argument. Collect all data from the server (not
// just the first "data" event) and then write two lines to the console
// (stdout).

// The first line you write should just be an integer representing the number
// of characters received from the server. The second line should contain the
// complete String of characters sent by the server.

const http = require('http');

const url = process.argv[2];
let buff = "";

http.get(url, function (res) {
            res.setEncoding("utf-8");
            res.on("data", function (data) {
                buff = buff.concat(data);                
            });
            res.on("end", function (data) {
                console.log(buff.length);
                console.log(buff);
            });
            res.on("error", console.error);
        });