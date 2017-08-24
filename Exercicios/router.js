function route (pathname, handlers,req, res){
	console.log("Rounting: "+pathname);
	if(typeof handlers[pathname] == 'function'){
		handlers[pathname](req,res);
	} else {
		console.log("Não há handler para "+pathname);
	}
}

exports.route = route;
