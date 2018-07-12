let mongoose = require('mongoose')
let url = 'mongodb://localhost:27017/runboo'

mongoose.connect(url, function (err) {
    let schema = new mongoose.Schema({ age: Number, name: String })
    let user = mongoose.model('User', schema, 'User')
    // 调用update，更新第一个，设置{multi:true}可更新多个
    // 调用updateMany也可以更新多个
    // updateOne更新第一个，设置mult:true也无法更新多条数据
    user.update({age: {$gt: 22}}, {age: 22}, function(err, raw) {
        console.log(raw)
        mongoose.disconnect()
    })
})