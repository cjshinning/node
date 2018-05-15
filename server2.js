const express = require('express')
const expressStatic = require('express-static')

var server = express()
server.listen(8080)

// 用户数据
var users={
    'blue': '123456',
    'zhangsan': '666666'
}

server.get('/login', function(req, res){
    console.log(req.query)
    var user = req.query['user']
    var pass = req.query['pass']

    if(users[user]==null){
        res.send({ok: false, msg: '此用户不存在'})
    }else{
        if(users[user]!=pass){
            res.send({ok: false, msg: '用户名或密码错误'})
        }else{
            res.send({ok: true, msg: '成功'})
        }
    }
})


server.use(expressStatic(__dirname + '/www'))