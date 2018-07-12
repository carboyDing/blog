let mongoose = require('mongoose')
let url = 'mongodb://localhost:27017/runboo'
let schema = mongoose.Schema

mongoose.connect(url, function (err) {
    let user = new schema({
        name: String,
        age: Number
    })
    let model = mongoose.model('User', user, 'User')

    // model.find({ age: { $gt: 18 }, name: /y/},{_id: 0}, function (err, res) {
    //     console.log(res)
    //     mongoose.disconnect()
    // })
    // model.findOne({age: {$gt: 20}}, {lean: true}, function(err, res) {
    //     console.log(res)
    //     mongoose.disconnect()
    // })
    // model.find({$where: 'this.name==this.age'}, function(err, res) {
    //     console.log(res)
    //     mongoose.disconnect()
    // })
    // model.find().select('name age -_id').exec(function(err, res) {
    //     console.log(res)
    //     mongoose.disconnect()
    // })

    // model.find().count(function(err, count) {
    //     console.log(count)
    //     mongoose.disconnect()
    // })

    // model.find().distinct('name', function(err, res) {
    //     console.log(res)
    //     mongoose.disconnect()
    // })

})