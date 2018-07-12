let mongoose = require('mongoose')
let url = 'mongodb://localhost:27017/runboo'
let Schema = mongoose.Schema

mongoose.connect(url, function (err) {
    let user = new Schema({
        name: String,
        age: Number
    })
    // 静态方法通过schema对象的statics属性给model添加方法
    // 实例方法是通过schema对象上的mothods给document添加方法
    user.methods.findSimilarAge = function (cb) {
        return this.model('User').find({ age: this.age }, cb)
    }
    user.statics.findByName = function (name, cb) {
        return this.find({ name: new RegExp(name, 'i') }, cb)
    }
    let model = mongoose.model('User', user, 'User')

    let user1 = new model({ name: 'yaoding', age: 24 })
    let user2 = new model({ name: 'dear', age: 24 })
    user1.save()
    user2.save()

    setTimeout(function () {
        user1.findSimilarAge(function (err, docs) {
            docs.forEach((item, index, arr) => {
                console.log(item.name)
            })
        })
    }, 0)

    setTimeout(function (params) {
        model.findByName('d', function (err, docs) {
            console.log(docs)
        })
    }, 0)
})