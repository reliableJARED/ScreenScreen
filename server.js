var app = require('express')();

//Express initializes app to be a function handler that you can supply to an HTTP server
var http = require('http').Server(app);

//A server that integrates with (or mounts on) the Node.JS HTTP Server: socket.io
var io = require('socket.io')(http);

var port = process.env.PORT || 5000; 

//required for serving locally when testing
var serveStatic = require('serve-static');


app.use(serveStatic(__dirname+'/'));
app.use(serveStatic(__dirname + '/socket.io/'));


//serve HTML to initial get request
app.get('/', function(request, response){
	response.sendFile(__dirname+'/screenscreen.html');
});


http.listen(port, function(){
	console.log('listening on port: '+port);
	console.log('serving files from root: '+__dirname);
	});		

/*USE BELOW FOR LOCAL HOSTING
//var ip = '192.168.1.100'

http.listen(port,ip, function(){
	console.log('listening on port: '+port);
	console.log('serving files from root: '+__dirname);
	});	
*/



//socketio listener for 'connection'
io.on('connection', function(socket){
	
	
	socket.on('disconnect', function(){
		RemoveAPlayer(this.id);
	});
	
	
	
});