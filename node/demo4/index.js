let buf = new Buffer(256);
let len = buf.write("www.runoob.com");

console.log(len)

let buf1 = new Buffer('Hello')
let buf2 = new Buffer(' Node.js')
// 合并buffer
let buf3 = Buffer.concat([buf1, buf2])
console.log(buf3.toString())

// 比对
console.log(buf1.compare(buf2))

let buf4 = new Buffer(100)

// buf3拷贝至buf4
buf3.copy(buf4)
console.log(buf4.toString())
console.log('裁剪结果为' + buf4.slice(0, 5).toString())