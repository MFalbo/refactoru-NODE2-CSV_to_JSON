var fs = require('fs');
var csv = fs.readFileSync(process.argv[2],'utf-8');
var x = csv.split(',');
console.log(x);