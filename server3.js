var http = require('http')
const urlLib = require('url')

var server = http.createServer(function (req, res) {
    var obj = urlLib.parse(req.url, true)
    console.log(obj)

    var url = obj.pathname
    var GET = obj.query

    console.log(url)
    console.log(GET)
    res.write('aaa')
    res.end()
})

server.listen(8080)