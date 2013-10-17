var fs = require('fs');
var http = require('http');

http.createServer(function(request, response){
	fs.readFile('HTMLPage.htm', function(err, data){
		response.writeHead(200, {'Content-Type' : 'text/html'});
		response.end(data);
		if(err) throw err;
		console.log(data);
	});
}).listen(52273, function(){
	console.log('Server Running at http://localhost:52273');
});