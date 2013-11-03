var http = require('http');
var fs = require('fs');
var jade = require('jade');

http.createServer(function(request, response){
	fs.readFile('JadePage.jade', 'utf8', function(error, data){
		var fn = jade.compile(data);

		response.writeHead(200, {'Content-Type' : 'text/html'});
		response.end(fn({
			name : 'RintianTta sjh',
			description : 'Hello EJS Jade With Node.js'
		}));
	});
}).listen(52273, function(){
	console.log('Jade Test Server Running at http://127.0.0.1:52273');
});