var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

var handlers = {};
handlers["/"] = requestHandlers.hello;
handlers["/index.html"] = requestHandlers.hello;
handlers["/hello.html"] = requestHandlers.hello;
handlers["/loop.html"] = requestHandlers.loop;
handlers["/impares.html"] = requestHandlers.impares;

server.start(router.route, handlers);
