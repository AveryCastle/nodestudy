exports.timer = new process.EventEmitter();

var eventId = setInterval(function(){
	exports.timer.emit('tick');
}, 2000);

setTimeout(function(){
	clearInterval(eventId);
}, 12000);