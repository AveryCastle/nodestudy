var http = require('http');

http.createServer(function(request, response){
	if( request.mothod == 'GET'){
		console.log('This is Get request.');
	}else if( request.method == 'POST'){
		console.log('This is POST request.');
	}
	console.log('It\'s me. I\'m here.');
	response.writeHead(200, { 'Content-Type' : 'text/html'});
	response.end();

}).listen(52273, function(){
	console.log('Server Running at http://127.0.0.1:52273');
});