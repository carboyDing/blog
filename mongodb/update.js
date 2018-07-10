let mongoClien = require('mongodb').MongoClient
let url = "mongodb://localhost:27017/"

mongoClien.connect(url, function(err, db) {
    if (err) {
        throw err;
    }
    let dbase = db.db('runboo')
    let query = {name: 'yaoding'}
    let updateData = {$set: {age: 24}}
    dbase.collection('site').updateOne(query, updateData, function(err, res) {
        if(err) {
            throw err;
        }
        console.log('文档更新成功...')
        db.close()
    })
})