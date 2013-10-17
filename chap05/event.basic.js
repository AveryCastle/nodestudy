process.on('exit', function(){
	console.log('good bye~~~!!');
});

process.on('uncaughtException', function(error){
	console.log( ' exception occurs');
	console.log(error);
});

// 2초 간격으로 예외처리 발생시킴.
var count = 0;
var id = setInterval(function(){
	count++;
	if(count == 4){
		clearInterval(id);
	}

	// 강제로 예외 발생시킴.
	error.error.error();

}, 2000);

