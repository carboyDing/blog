let fs = require('fs')

let readStream = fs.createReadStream('test.txt')
let writeStream = fs.createWriteStream('output.txt')

// 管道读写操作
// 读取 input.txt 文件内容，并将内容写入到 output.txt 文件中
readStream.pipe(writeStream)

console.log("程序执行完毕");