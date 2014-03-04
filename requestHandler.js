var fs = require('fs');

function index(pathname, response){

	//console.log("request for index page received");
	fs.readFile('html/index.html', function(error, content) {
		if (error) {
			response.writeHead(500);
			console.log(error);
			response.end();
		}
		else {
			response.writeHead(200, { 'Content-Type': 'text/html' });
			response.end(content, 'utf-8');
		}
	});

}

function about(pathname, response){

	//console.log("request for about page received");
	fs.readFile('html/about.html', function(error, content) {
		if (error) {
			response.writeHead(500);
			console.log(error);
			response.end();
		}
		else {
			response.writeHead(200, { 'Content-Type': 'text/html' });
			response.end(content, 'utf-8');
		}
	});

}

function test(pathname, response){

	//console.log("request for test page received");
	fs.readFile('html/test.html', function(error, content) {
		if (error) {
			response.writeHead(500);
			console.log(error);
			response.end();
		}
		else {
			response.writeHead(200, { 'Content-Type': 'text/html' });
			response.end(content, 'utf-8');
		}
	});

}

function style(pathname, response){

	var split = pathname.split("/");

	fs.readFile('css/' + split[2], function(error, content) {
		if (error) {
			response.writeHead(500);
			console.log(error);
			response.end();
		}
		else {
			response.writeHead(200, { 'Content-Type': 'text/css' });
			response.end(content, 'utf-8');
		}
	});

}

function script(pathname, response){

	var split = pathname.split("/");

	fs.readFile('js/' + split[2], function(error, content) {
		if (error) {
			response.writeHead(500);
			console.log(error);
			response.end();
		}
		else {
			response.writeHead(200, { 'Content-Type': 'text/js' });
			response.end(content, 'utf-8');
		}
	});

}

exports.index = index;
exports.about = about;
exports.test = test;
exports.style = style;
exports.script = script;