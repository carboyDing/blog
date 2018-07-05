let http = require('http')
let fs = require('fs')

// 同步
/*http.createServer(function(req, res) {
	res.writeHead(200, {'Content-Type': 'text/plain'})
	let content = fs.readFileSync('test.txt').toString();
	console.log(content)
	res.write(content)
	console.log('阻塞按是按顺序执行的')
	res.end();
}).listen(8000)*/

// 异步
http.createServer(function(req, res) {
	res.writeHead(200, {'Content-Type': 'text/plain'})
	fs.readFile('test.txt', function(err, data) {
		if (err) return console.error(err);
    	let content = data.toString()
    	console.log(content)
    	res.write(content)
    	res.end();
	})
	console.log('非阻塞是不需要按顺序的')
	
}).listen(8000)