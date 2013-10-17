process.once('uncaughtException', function(stream){
	console.log('exception is occured -.- I\'ll forgive you this time.');
});

setInterval(function(){
	error.error.error();
	console.log('error causes this');
}, 2000);