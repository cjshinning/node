const jade = require('jade')

console.log(jade.renderFile('./views/10.jade', {
    pretty: true,
    arr: ['aaa', 'left','ajsj']
}))