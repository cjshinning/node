var ejs = require('ejs')

ejs.renderFile('./views/6.ejs', {type:'admin|user'}, function (err, data) {
    console.log(data)
})