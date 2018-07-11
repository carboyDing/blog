let express = require('express')
let app = express()

let bodyParser = require('body-parser')
let multer = require('multer')
let fs = require('fs')

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(multer({ dest: '/tmp/'}).array('image'))

app.get('/file', (req, res) => {
    res.sendFile(__dirname + '/file.html')
})

app.post('/upload', (req, res) => {
    console.log(req.files[0])
    let filePath = __dirname + '/' + req.files[0].originalname;
    fs.readFile(req.files[0].path, (err, data) => {
        fs.writeFile(filePath, data, (err, res) => {
            if(err) {
                throw err
            } else {
                let result = {
                    message: 'file upload success',
                    filename: req.files[0].originalname
                }
                console.log(result)
                res.end(JSON.stringify(result))
            }
        })
    })
})

app.listen(8081, () => {
    
})