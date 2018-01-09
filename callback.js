
//blocking code
var fs = require('fs');
/*
//reads the content first
// then prints the result it is slower because it has read the file first and then it has print
var contents = fs.readFileSync('/etc/hosts');
console.log(contents);
console.log('Do Something Else');
*/

//non blocking code
//while reading it prints the result it is faster becuase its happening simultaneously

// fs.readFile('/etc/hosts',function(err,contents)
// 	function callback..... executing two functions {
// 	console.log(contents);
// });
// console.log('Doing Something Else');

var callback = function(err,contents){
	console.log(contents);
};
fs.readFile('/etc/hosts',callback);
console.log('Doing Something Else');
