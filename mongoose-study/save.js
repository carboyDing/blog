let mongoose = require('mongoose')
let Schema = mongoose.Schema
let url = 'mongodb://localhost:27017/runboo'

mongoose.connect(url, function(err) {
    let user = new Schema({ // 用户定义collection里文档document的结构
        name: String,
        age: Number
    })
    let model = mongoose.model('User', user, 'User') // 根据schema编译出的构造器，或者称为类，通过model可以实例化出文档对象document
    // create 或者 inserMany
    model.create([{name: 'honey', age: 18}, {name: 'yaoding', age: 24}], function(err, doc1, doc2) {
        console.log(doc1)
        console.log(doc2)
    })
    let doc = new model({name: 'beautiful', age: 21})
    doc.save(function(err, doc) {
        console.log(doc)
    })
})

