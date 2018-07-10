let mongoClient = require('mongodb').MongoClient
let url = "mongodb://localhost:27017/"

mongoClient.connect(url, function (err, db) {
    if (err) {
        throw err
    }
    
    let dbase = db.db('runboo')
    let query = {
        name: 'honey'
    }
    dbase.collection('site').deleteOne(query, function(err, res) {
        if (err) {
            throw err
        }
        console.log('文档删除成功...')
        db.close()
    })
})