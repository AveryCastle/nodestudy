// var http = require('http');
// var fs = require('fs');
// var ejs = require('ejs');

// http.createServer(function(request, response){
// 	fs.readFile('EJSPage.ejs', 'utf-8', function(error, data){
// 		response.writeHead(200, { 'Content-Type' : 'text/html'});
// 		response.end(ejs.render(data));
// 	});
// }).listen(52273, function(){
// 	console.log('Server Running at http://localhost:52273');
// });

var http = require('http');
var fs = require('fs');
var ejs = require('ejs');

http.createServer(function(request, response){
	fs.readFile('EJSPage2.ejs', 'utf-8', function(error, data){
		response.writeHead(200, { 'Content-Type' : 'text/html'});
		response.end( ejs.render(data, {
			name : 'RintIanTta',
			description: 'Hello EJS With Node.js~~'
		}));
	});
}).listen(52273,function(){
	console.log('EJS Test Server Running at http://127.0.0.1:52273')
});