var url = require('url');

var parseObject = url.parse('https://github.com/JuHyun/nodestudy');
console.log(parseObject);
console.log('parseObject : '+ JSON.stringify(parseObject));
console.log('-------------------------------------------');
var parseObject2 = url.parse( 'http://user:pass@host.com:8080/p/a/t/h?query=string#hash');
console.log(parseObject2);
console.log('parseObject2 :' + parseObject2);
console.log( 'format : ' + url.format(parseObject2));