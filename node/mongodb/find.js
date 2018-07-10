let mongoClient = require('mongodb').MongoClient
let url = "mongodb://localhost:27017/"

mongoClient.connect(url, function(err, db) {
    if(err) {
        throw err 
    }
    let dbase = db.db('runboo')
    let query = {name: 'yaoding'}
    dbase.collection('site').find(query).toArray(function(ree, result) {
        if (err) {
            throw err
        }
        console.log(result)
        db.close()
    })
})