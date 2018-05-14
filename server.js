var http = require('http')
var fs = require('fs')

var server = http.createServer(function (req, res) {
    var file_name = './www' + req.url

    fs.readFile(file_name, function (err, data) {
        if (err) {
            res.write('404')
        } else {
            res.write(data)
        }
        res.end()
    })

})

// 监听——等着
// 端口
server.listen(8080)