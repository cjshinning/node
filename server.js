const express = require('express')

var server = express()

// cookie
server.use('/', function(req, res){
    res.cookie('user','blue',{path: '/aaa', maxAge: 30*24*60*60*1000})
    res.send('ok')
})

server.listen(8080)