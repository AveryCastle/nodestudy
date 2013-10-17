var http = require('http');

http.createServer(function(request, response){
	response.writeHead(200, {'Content-Type' : 'text/html'});
	response.end('<h1>node server create ~ </h1>')
}).listen(52273, function(){
	console.log('Server Running at http://localhost:52273')
});