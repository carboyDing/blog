let mongoose = require('mongoose')
let url = 'mongodb://localhost:27017/runboo'

mongoose.connect(url, function (err) {
    let schema = new mongoose.Schema({
        name: String,
        age: Number
    })

    let user = mongoose.model('User', schema, "User")
    user.find().sort('name age').exec(function (err, res) {
        console.log(res)
        mongoose.disconnect()
    })
})