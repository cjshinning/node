var ejs = require('ejs')

ejs.renderFile('./views/4.ejs', {
    json: {
        arr:[
            {user: 'blue', pass: '123456'},
            {user: 'Jenny', pass: '544221'},
            {user: 'xiaoli', pass: '888'}
        ]
    }
}, function (err, data) {
    console.log(data)
})