// Streams aren't just for text files and stdin/stdout. Did you know that http
// request and response objects from node core's `http.createServer()` handler are
// also streams

// This is great because our server can respond immediately without buffering
// everything in memory first.

var http     = require('http');
var through2 = require('through2');

var write = function(buf, encoding, next) { 
  this.push(buf.toString().toUpperCase());
  next();
};

var server = http.createServer(function(req, res) {
  req
    .pipe(through2(write))
    .pipe(res);
});

server.listen(process.argv[2]);