const express = require('express')
const bodyParser = require('body-parser')

var server = express()
server.listen(8080)

// server.use(bodyParser.urlencoded({
//     extended: true,     //扩展模式
//     limit: 2*1024*1024  
// }))

// server.use('/', function(req, res){
//     // console.log(req.query)  //GET
//     console.log(req.body)  //POST
// })

server.use('/', function(req, res, next){
    console.log('a')
    next()
})
server.use('/', function(){
    console.log('b')
})