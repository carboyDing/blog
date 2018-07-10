let MongoClient = require('mongodb').MongoClient;
let url = "mongodb://localhost:27017/";

MongoClient.connect(url, function (err, db) {
    if (err) {
        throw err;
    }
    let dbase = db.db('runboo')
    dbase.createCollection('site', function(err, res) {
        if (err) {
            throw err;
        }
        console.log('Collection has created...')
        db.close()
    })
})