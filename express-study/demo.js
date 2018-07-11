let express = require('express')
let app = express()

app.get('/', function(req, res) {
    res.send('Hello World')
})

let server = app.listen(8081, function() {
    let host = server.address().address
    let port = server.address().port
    console.log('server start http://%s:%s', host, port)
})