// const mod1=require('./mod.js')

// console.log(mod1.a,mod1.b,mod1.c)

exports.sum = function () {
    var res = 0
    for (var i = 0; i < arguments.length; i++) {
        res += arguments[i]
    }
    return res
}