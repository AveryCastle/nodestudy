var http = require('http');

http.createServer(function(request, response){

	// 1. cooke, time
	// var date = new Date();
	// date.setDate(date.getDate() + 7);

	// response.writeHead(200, {
	// 	'Content-Type'	: 'text/html',
	// 	'Set-Cookie'	: [
	// 		'breakfast = toast;Expires =' + date.toUTCString(),
	// 		'dinner = chichen'
	// 	]
	// });

	// response.end('<h1>'+request.headers.cookie+'</h1>');


	// 2. redirect page
	// response.writeHead(302, { 'Location' : 'http://www.google.com' });
	// response.end();


	// 3. page not found
	response.writeHead(404);
	response.end();


}).listen(52273, function(){
	console.log('Server Running at http://127.0.0.1:52273');
});