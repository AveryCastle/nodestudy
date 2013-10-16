var url = require('url');
var queryString = require('querystring');

var parseObject = url.parse('http://user:pass@host.com:8080/p/a/t/h?query=string&name=hanbit&age=20');
var query = parseObject.query;

console.log( 'query :' + query );
console.log( 'JSON.stringify(queryString) :' + JSON.stringify(queryString.parse(query)));
console.log( 'querystring.parse(queryString) :' + JSON.stringify(queryString.parse(query)));