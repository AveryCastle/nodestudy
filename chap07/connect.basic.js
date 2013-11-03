var connect = require('connect');

connect.createServer(function(request, response, next){
	console.log('The first function' + request.url);

	next();
}, function(request, response, next){
	console.log('The seconde function'+ request.url);

	next();	
}, function(request, response, next){
	response.writeHead(200, {'Content-type' : 'text/html'});
	response.end('<h1>Hello Connect Module ~~ </h1>');
}).listen(52237, function(){
	console.log('Connect Server Running at http://127.0.0.1:52237');
});