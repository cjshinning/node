var http = require('http')
var querystring = require('querystring')

var server = http.createServer(function (req, res) {
    // post=req

    var str = ''    //接受数据

    // data——有一段数据到达（很多次）
    var i = 0
    req.on('data', function(data){
        console.log(`第${i++}次收到数据`)
        str += data
    })
    // end——数据全部到达（一次）
    req.on('end',function(){
        var POST = querystring.parse(str)
        // console.log(POST)
    })
})

server.listen(8080)