var net = require('net')

// - The JSON response should contain only 'year', 'month',
// 'hour', 'minute' and 'second' properties. For example:
//     {
//       "hour": 14,
//       "minute": 23,
//       "second": 15
//     }

function parsetime (time) {
  return {
    year: time.getFullYear(),
    month: time.getMonth() + 1, // months are zero-based
    date: time.getDate(),
    hour: time.getHours(),
    minute: time.getMinutes(),
  }
}

var server = net.createServer(function (socket) {
    socket.write('HTTP/1.1 200 OK\n\n')
    // get the now time
    var time = new Date()
    // parse the time
    var parsedTime = parsetime(time)
    // send the parsed time as JSON
    socket.end(JSON.stringify(parsedTime))
})

server.listen(Number(process.argv[2]))