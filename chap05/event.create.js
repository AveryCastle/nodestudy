var custom = new process.EventEmitter();

custom.on('tick', function(stream){
	console.log('tick event occurs ~~ ');
});

var result = custom.emit('tick');
console.log('result :' + result);