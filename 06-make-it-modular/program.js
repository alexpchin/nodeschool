var filter = require('./solution_filter.js')
var directory = process.argv[2]
var extension = process.argv[3]

filter(directory, extension, function(err, list) {
  if (err)
    return console.error('There was an error:', err)

  list.forEach(function(file) {
    console.log(file)
  })
})