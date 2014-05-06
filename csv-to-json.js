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
	obj[newArray[0][0]] = newArray[i][0];
	obj[newArray[0][1]] = newArray[i][1];
	obj[newArray[0][2]] = newArray[i][2];

	objArray.push(obj);
}

objString = JSON.stringify(objArray);

fs.writeFileSync(process.argv[3], objString);