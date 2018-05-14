const http = require('http')
const fs = require('fs')
const querystring = require('querystring')
const urlLib = require('url')

var server = http.createServer(function (req, res) {
    // GET
    console.log(req.url)
    var obj = urlLib.parse(req.url, true)
    console.log(obj)

    var url = obj.pathname
    console.log(url)
    const GET = obj.query

    // POST
    var str = ''
    req.on('data', function (data) {
        str += data
    })
    req.on('end', function () {
        const POST = querystring.parse(str)

        // url——要什么
        // GET——get数据
        // POST——post数据
        console.log(url, GET, POST)
    })

    // 文件
    var file_name = './www' + url
    fs.readFile(file_name, function(err, data){
        if(err){
            res.write('404')
        }else{
            res.write(data)
        }
        res.end()
    })
})

server.listen('8080')