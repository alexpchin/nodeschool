var net = require('net');
var port = parseInt(process.argv[2]);

var server = net.createServer(function(socket){
  function numberToFormattedString(number) {
    if (number<10) return '0' + number.toString();
    else return number.toString();
  }

  var date = new Date();
  var year = numberToFormattedString(date.getFullYear());
  var month = numberToFormattedString((date.getMonth() + 1));
  var day = numberToFormattedString(date.getDate());
  var hour = numberToFormattedString(date.getHours());
  var minute = numberToFormattedString(date.getMinutes());
  socket.end(year + '-' + month + '-' + day + ' ' + hour + ':' + minute + '\n');
});

server.listen(port);