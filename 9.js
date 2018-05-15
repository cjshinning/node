const jade = require('jade')

console.log(jade.renderFile('./views/9.jade', {
    pretty: true,
    a: 4,
    b: 5
}))