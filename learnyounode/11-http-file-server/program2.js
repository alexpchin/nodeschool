var http = require('http');
var fs   = require('fs');

http.createServer(function(req, res) {
  var readStream = fs.createReadStream(process.argv[3]);

  readStream.on('open', function () {
    // This just pipes the read stream to the response object (which goes to the client)
    readStream.pipe(res);
  });

  // This catches any errors that happen while creating the readable stream (usually invalid names)
  readStream.on('error', function(err) {
    res.end(err);
  });

}).listen(process.argv[2]);