const jade = require('jade')

console.log(jade.renderFile('./views/12.jade', {
    pretty: true
}))