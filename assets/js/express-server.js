var express = require('express');
var app = express();
var dataFile = require('./json/data.json');

app.get('/', function(req, res){
	res.send('<h1> Welcome to Home Page</h1>');
});

app.get('/speakers', function(req, res){
	var info = '';
	dataFile.speakers.forEach(function(item){
		info += `
		<li>
			<h2>${item.name}</h2>
			<p>${item.summary}</p>
		</li>

		`;	
	});
	res.send(`
		<h1> Speakers</h1>
		${info}

	`);
});


var server = app.listen(3000, function(){
	console.log('Listening on port 3000');
});