var util = require('util');

var data = util.format('%s : %s', 'a', 'b', 'c', 'd');
console.log('data : ', data);
console.log( util.debug('{ name : "sjh", age : "29", job : "i dont know"}'));
console.log(util.inspect(util, { showHidden: true, depth: null, color: true }));
console.log('--------------------------------------------------------------');
util.puts(data);
util.print('what is your name ? \n I\'m '+ data + '\n');