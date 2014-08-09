var express = require('express');

var app = express();
var path = require("path");
var http = require("http"),
	fs = require("fs");


// all environments
app.set('port',  80);
app.set('views', path.join(__dirname + '/views'));
app.set('view engine', 'ejs');
app.use(express.favicon());
  app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());

app.use(express.static(path.join(__dirname, "public")));

// development only
if ('development' == app.get('env')) {
    app.use(express.errorHandler());
}
var split = "\u0001";
// reload config
app.get("/getImage",function(req,res){
	var director = path.join(__dirname,"public/images")

	res.setHeader("Content-Type","text/plain");

	var files = fs.readdirSync(director);
	files.forEach(function(a,i){
		//if(i < 2){
			var filePath = path.join(director,a);
			var content = fs.readFileSync(filePath);
			
			res.write(content);
		//}
	})
	res.end();
})
app.get("/getImageLength",function(req,res){
	var director = path.join(__dirname,"public/images")

	res.setHeader("Content-Type","text/plain");

	var files = fs.readdirSync(director);
	var json = [];

	files.forEach(function(a,i){
		//if(i < 2){
			var filePath = path.join(director,a);
			var content = fs.readFileSync(filePath);
			json.push(content.length);
		//}
	})
	res.end(JSON.stringify(json));
})

http.createServer(app).listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
});