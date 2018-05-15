const express = require('express')

// 1.创建服务
var server = express()

// 3.处理请求
// server.use('/a.html', function (req, res) {
//     res.send({
//         a: 12,
//         b: 5
//     })
//     res.end()
// })

// server.use('/b.html', function (req, res) {
//     res.write('123')
//     res.end()
// })

// server.get('/', function(){
//     console.log('有get')
// })

// server.post('/', function(){
//     console.log('有post')
// })

server.use('/', function(){
    console.log('有use')
})

// 2.监听
server.listen(8080)