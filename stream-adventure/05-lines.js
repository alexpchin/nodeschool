var through2 = require('through2');
var split    = require('split');

var lineCount = 1;
var tr = through2(function(buf, encoding, next) {
  var line = buf.toString();
  line = (lineCount % 2 == 0) ? line.toUpperCase() : line.toLowerCase();
  this.push(line + "\n");
  lineCount++
  next();
});

process.stdin
  .pipe(split())
  .pipe(tr)
  .pipe(process.stdout);