var fs = require('fs');

var csv = fs.readFileSync(process.argv[2],'utf-8');


var csvArray = csv.split('\n');
var newArray = [];

for(var i=0; i<csvArray.length; i++){
	var item = csvArray[i].split(',');
	newArray.push(item);
}

var objArray = [];

for(var i=1; i<newArray.length; i++){
	var obj = {};

	for(var j=0; j<newArray[i].length; j++){
		obj[newArray[0][j]] = newArray[i][j];
	}

	objArray.push(obj);
}

objString = JSON.stringify(objArray);

fs.writeFileSync(process.argv[3], objString);