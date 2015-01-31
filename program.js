//ex. Hello World
//console.log("HELLO WORLD")
//node program.js
//learnyounode verify program.js

//ex. Baby Steps

//var processSum = 0;

//for (var i = 2; i < process.argv.length; i++) {
  //processSum = processSum + Number(process.argv[i]);
//}

//console.log(processSum);

//this is what is what the loop does to get an output of 6:
//1+2 = 3
//3+3 = 6

//ex. My First I/O (input/output)
//Write a program that uses a single synchronous filesystem operation to read a file and print
//the number of newlines it contains to the console (stdout)

// var fs = require('fs')

// var contents = fs.readFileSync(process.argv[2])
// var lines = contents.toString().split('\n').length - 1
// console.log(lines)

//ex. My First Async I/0
// Write a program that uses a single asynchronous filesystem operation to read a file and print 
// the number of newlines it contains to the console (stdout), similar to running cat file | wc -l.

// var fs = require('fs')

// var contents = fs.readFile(process.argv[2])
// var lines = contents.toString().split('\n').length - 1
// console.log(lines)

