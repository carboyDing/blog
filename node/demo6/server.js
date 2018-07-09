let http = require('http')
let url = require('url')

function start(route) {
	http.createServer(function(req, res) {
		let pathname = url.parse(req.url).pathname
		route(pathname)
		res.writeHead(200, {'Content-Type': 'text/plain'})
		res.write('Hello NodeJS')
		res.end()
	}).listen(8000)
}

exports.start = start