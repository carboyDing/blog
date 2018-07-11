let express = require('express')
let app = express()

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/getInfo', (req, res) => {
    var obj = {
        name: req.query.name,
        age: req.query.age
    }
    console.log(obj)
    res.send(JSON.stringify(obj))

})

let server = app.listen(8081, () => {
    let host = server.address().address
    let port = server.address().port
    console.log('server start http://%s:%s', host, port)
})