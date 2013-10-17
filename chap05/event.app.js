var rint = require('./event.rint');

rint.timer.on('tick', function(stream){
	console.log('event is invoked');
});