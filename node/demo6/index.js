let server = require('./server')
let router = require('./route')

server.start(router.route)

console.log(__filename)
console.log(__dirname)