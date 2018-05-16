var str = `
aaa
sdjjsdjsddshsd

ajsjsdj

sdjdjsj
`

var str2 = str.replace(/^/gm,'<p>').replace(/$/gm,'</p>')
console.log(str2)