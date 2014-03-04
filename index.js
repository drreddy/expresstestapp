var server = require("./server")
var router = require("./router")
var requestHandler = require("./requestHandler")

var handle = {}

handle["/"] = requestHandler.index;
handle["/home"] = requestHandler.index;
handle["/about"] = requestHandler.about;
handle["/test"] = requestHandler.test;
handle["/css"] = requestHandler.style;
handle["/js"] = requestHandler.script;


server.start(router.route, handle);


