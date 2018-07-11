let express = require('express')
let app = express()

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.send('Hello Express')
})

let server = app.listen('8081', () => {
    let host = server.address().address
    let port = server.address().port
    console.log('server start http://%s:%s', host, port)
})