var http = require('http');

http.createServer(function(request, response){
	//GET COOKIE
	var cookie = request.headers.cookie;
	cookie = cookie.split(';').map(function(element){
		var element = element.split('=');
		return{
			key : element[0],
			value : element[1]
		}
	});

	// SET COOKIE
	response.writeHead(200, {
		'Content-Type' : 'text/html',
		'Set-Cookie' : [ 'name=RintianTta', 'region=Seoul']
	});

	//GET Request
	response.end('<h1>'+JSON.stringify(cookie)+'</h1>');
}).listen(52273, function(){
	console.log('Server Running at http://localhost:52273');	
});