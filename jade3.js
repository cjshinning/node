
// const jade=require('jade')
// const fs = require('fs')
// const path = require('path')

// var str=jade.renderFile('./views/2.jade',{pretty:true})

// // console.log(str)
// console.log(path.dirname(__dirname))

// fs.writeFile(path.dirname(__dirname + './build/2.html'), str, function(err){
//     if(err){
//         console.log('写入失败')
//     }else{
//         console.log('写入成功')
//     }
// })

const jade=require('jade');
const fs=require('fs');

var str=jade.renderFile('./views/7.jade', {pretty: true});

fs.writeFile('7.html', str, function (err){
  if(err)
    console.log('写入失败');
  else
    console.log('写入成功');
});