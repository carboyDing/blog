let mongoClient = require('mongodb').MongoClient
let url = 'mongodb://localhost:27017/'

mongoClient.connect(url, function (err, db) {
    if (err) {
        throw err
    }
    let dbase = db.db('runboo')
    let query = { name: 1 }
    // dbase.collection('site').find().sort(query).toArray(function(err, result) {
    //     if(err) {
    //         throw err
    //     }
    //     console.log(result)
    //     db.close()
    // })
    dbase.collection('site').find().skip(1).limit(1).toArray(function (err, result) {
        if (err) {
            throw err
        }
        console.log(result)
        db.close()
    })
})