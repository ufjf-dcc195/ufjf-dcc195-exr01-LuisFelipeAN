var http = require("http");
function hello(){
	console.log("Olá mundo!");
}

function loop(){
	console.log("Handler: loop!");
	var t = new Date().getTime()+10*1000;
	while(new Date().getTime()<t){}
	console.log("Fim do loop!");
}

function impares(req,res){
  res.writeHead(200, {"Content-Type": "text/plain"});
  for(var i = 1; i < 100; i+=2){
      res.write(i+" \t");
  }
  res.end();
}


exports.hello = hello;
exports.loop = loop;
exports.impares= impares;
