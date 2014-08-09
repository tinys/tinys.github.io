var path = require("path"),
	fs = require("fs");


var dirPath = path.join(__dirname,"images");

var files = fs.readdirSync(dirPath);
var destFile = path.join(__dirname,"dest.comb");

files.forEach(function(a,i){
	var filePath = path.join(dirPath,a);
	var content = fs.readFileSync(filePath);
	fs.appendFileSync(destFile,content);
})