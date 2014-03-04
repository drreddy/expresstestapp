function route(pathname, handle, response){
	//console.log("About to route for the path: " + pathname);

	//We split the pathname to route all the css things also

	var split_path = pathname.split('/');

	//console.log(split_path);

	console.log("About to route for the path: " + split_path[1]);

	if (typeof handle["/" + split_path[1]] === 'function') {
		handle["/" + split_path[1]](pathname,response);
	} else {
		//console.log("No request handler found for " + pathname);
		response.writeHead(404, {"Content_Type" : "text/plain"});
		response.write("404 Not Found");
		response.end();
	}

}

exports.route = route;
