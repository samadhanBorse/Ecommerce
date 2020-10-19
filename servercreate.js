var http=require('http')

var server=http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write("Hello from Node JS");
    res.end();
}).listen(9000);
console.log("sever started");