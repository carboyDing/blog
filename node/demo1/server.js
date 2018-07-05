let http = require('http')

// 创建http服务器
let server = http.createServer(function(req, res) {
	// 设置响应头
	res.writeHead(200, {'Content-Type': 'text/plain'})
	// 设置响应内容
	res.write('hello nodejs')
	// 响应结束
	res.end()
})

// 添加8000端口号的监听
server.listen(8000)

console.log('server running at http://127.0.0.1:8000')