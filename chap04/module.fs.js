var fs = require('fs');

try{
	var txt = fs.readFileSync('textFile.ini', 'utf-8');
	console.log(txt);
}catch(e){
	console.log(e);
}
console.log('------------ readFile exameple --------------');
fs.readFile('/etc/passwd', 'utf-8', function(err, data){
	if(err)	throw err;
	console.log(data);
	});

fs.readFile('textFile.ini', 'utf-8', function(err,data){
	if(err) throw err;
	console.log(data);
});

console.log('------------ writeFile exameple --------------');

var data = 'Hello Node.js World~~ !';

try{
	fs.writeFile('writeFile.ini', data, 'utf-8', function(err){
		console.log('write file completed.');
	});
}catch(e){
	console.log(e);
}

fs.readFileSync('writeFile.ini', 'utf-8', function(err, data){
	if(err) {
		console.log(err);
	}else{
		console.log(data);
	}
});