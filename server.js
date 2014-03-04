var http = require("http");
var url = require("url");

function start(route, handle){

	function onRequest(request, response){
		var pathname = url.parse(request.url).pathname
		
		//console.log("Request received for: " + pathname);

		route(pathname, handle, response);

	}

	http.createServer(onRequest).listen(8080);
	console.log("Server has started and listening on 8080.");
}

exports.start = start;