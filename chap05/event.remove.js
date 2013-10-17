var onUncaughtException = function(error){
	console.log('exception occurs. -.- I\'ll forgive you ^o^' );
	console.error(error);
	process.removeListener('uncaughtException', onUncaughtException);
};

process.on('uncaughtException', onUncaughtException);

setInterval(function(){
	// intentionally error occurs.
	error.error.error('~~$$$$ ~~~~');
}, 2000);