let express = require('express')
let bodyParser = require('body-parser')
let app = express()
// 创建application/x-www-form-urlencoded 编码解析
let urlencodedParser = bodyParser.urlencoded({extended: false})

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.post('/getInfo', urlencodedParser, (req, res) => {
    var obj = {
        name: req.body.name,
        age: req.body.age
    }
    console.log(obj)
    res.send(JSON.stringify(obj))

})

let server = app.listen(8081, () => {
    let host = server.address().address
    let port = server.address().port
    console.log('server start http://%s:%s', host, port)
})