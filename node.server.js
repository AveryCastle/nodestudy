// 모듈을 추출함
var http = require('http');

// 웹 서버를 생성 및 실행
http.createServer(function(request, response){
	response.writeHead(200, { 'Content-Type' : 'text/html'});
	response.end('<h1>Hello World Node.js Starter</h1>');
}).listen(52273 , function(){
	console.log('Server running at http://127.0.0.1:52273/');
});