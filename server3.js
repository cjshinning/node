const express = require('express')
const cookieParser = require('cookie-parser')

var server = express()

// cookie
server.use(cookieParser('sdhshdhsdhsd'))

server.use('/', function(req, res){
    req.secret = 'sdhshdhsdhsd'
    res.cookie('user', 'blue', {signed: true})

    console.log('带签名的cookie:' + req.signedCookies)
    console.log('不带签名的cookie:' + req.cookies)

    res.send('ok')
})

server.listen(8080)