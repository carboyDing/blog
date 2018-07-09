let fs = require('fs')
let data = ''

// 创建可读文件流
let readerStream = fs.createReadStream('test.txt')
// 设置编码方式
readerStream.setEncoding('UTF8');

// 处理流事件 --> data, end, and error
readerStream.on('data', function(chunk) {
    data += chunk;
});

// 监听流读取结束事件
readerStream.on('end', function() {
    console.log(data)
    writeFile()
})

// 在接收和写入过程中发生错误时回调
readerStream.on('error', function(err) {
    console.log(err.stack);
});


var writeFile = function() {
    data = data + '学海无涯苦作舟'

    // 创建一个可以写入的流，写入到文件 output.txt 中
    var writerStream = fs.createWriteStream('output.txt');

    // 使用 utf8 编码写入数据
    writerStream.write(data, 'UTF8');

    // 标记文件末尾
    writerStream.end();

    // 处理流事件 --> data, end, and error
    writerStream.on('finish', function() {
        console.log("写入完成。");
    });

    writerStream.on('error', function(err) {
        console.log(err.stack);
    });
}

console.log("程序执行完毕");