var http = require('http');

var server = http.createServer();

server.on('request', function(){
	console.log('Request on');
});

server.on('connection', function(){
	console.log('connection on');
});

server.on('close', function(){
	console.log('close ON');
});

server.listen(52273, function(){
	console.log('Server Running at http://localhost:52273');
});

// var timeId = setInterval(function(){
// 	console.log('Server close ~~ ');
// 	server.close();
// }, 10000);

// setTimeout(function(){
// 	clearInterval(timeId);
// }, 20000);