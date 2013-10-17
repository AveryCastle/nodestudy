var fs = require('fs');
var http = require('http');

http.createServer(function(request, response){
	fs.readFile('../img/forkit.gif', function(err, data){
		response.writeHead(200, { 'Content-Type' : 'image/gif'});
		response.end(data);
		if(err) throw err;
		console.log(data);
	});
}).listen(52273, function(){
	console.log('Server Running at http://localhost:52273');
});

http.createServer(function(request, response){
	fs.readFile('../etc/English_MP3.mp3', function(err, data){
		response.writeHead(200, {'Content-Type' : 'audio/mp3'});
		response.end(data);
		if(err) throw err;
		console.log(data);
	});
}).listen(52274, function(){
	console.log('Server Running at http://localhost:52274');
});