let mongoose = require('mongoose')
let url = 'mongodb://localhost:27017/runboo'

mongoose.connect(url, function(err) {
    let schema = new mongoose.Schema({
        name: String,
        age: Number
    })
    let user = mongoose.model('User', schema, 'User')
    // remove会删除含有所有条件的记录
    // findOneAndRemove只删除符合条件的第一条数据
    user.remove({name: /be/}, function(err) {
        mongoose.disconnect()
    })
})