var concat = require('concat-stream');

var out = function(buf) {
  var reversedString = buf.toString().split('').reverse().join('');
  
  // Can either use process.stdout or console.log
  // process.stdout.write(reversedString + '\n');

  // console.log() calls process.stdout.write with formatted output.
  // 
  // Console.prototype.log = function() {
  //   this._stdout.write(util.format.apply(this, arguments) + '\n');
  // };
  console.log(reversedString + '\n');
};

process.stdin
  .pipe(concat(out));