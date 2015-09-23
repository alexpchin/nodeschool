var through2 = require('through2');
var tr       = through2(write);

function write(buf, encoding, next) {
  this.push(buf.toString().toUpperCase());
  next();
}

process.stdin
  .pipe(tr)
  .pipe(process.stdout);