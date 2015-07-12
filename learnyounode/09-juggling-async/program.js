var http = require('http')
var bl = require('bl')
var results = []
var count = 0
var numberOfUrls = 3

function printResults () {
  for (var i = 0; i < numberOfUrls; i++)
    console.log(results[i])
}

function httpGet (index) {
  http.get(process.argv[2 + index], function (response) {
    response.pipe(bl(function (err, data) {
      if (err)
        return console.error(err)

      // Save the results to an array to use later
      results[index] = data.toString()

      // Increment the count of urls 'got'
      count++

      // Only when all of the urls have been received, print the results in order
      if (count == numberOfUrls)
        printResults()
    }))
  })
}

for (var i = 0; i < 3; i++)
  httpGet(i)