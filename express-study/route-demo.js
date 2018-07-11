let express = require('express')
let app = express()

app.get('/', function (req, res) {
    res.send('home get')
})

app.post('/', function(req, res) {
    res.send('home post')
})

app.get('/list', function(req, res) {
    res.send('list get')
})

app.get('/get*', function(req, res) {
    res.send('正则匹配')
})

let server = app.listen(8081, function () {
    let host = server.address().address
    let port = server.address().port
    console.log('server start http://%s:%s', host, port)
})