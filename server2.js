var http = require('http')
var querystring = require('querystring')

var server = http.createServer(function (req, res) {
    console.log(req.url, '\n\n')
    var GET = {}

    if (req.url.indexOf('?') != -1) {
        var arr = req.url.split('?')
        var url = arr[0]
        
        GET = querystring.parse(arr[1])
    }else{
        var url=req.url
    }


    console.log(url, GET)
    res.write('aaa')
    res.end()
})

server.listen(8080)