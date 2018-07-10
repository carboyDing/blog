let mongoClient = require('mongodb').MongoClient
let url = 'mongodb://localhost:27017/'

mongoClient.connect(url, function(err, db) {
    if(err) {
        throw err;
    }
    let dbase = db.db('runboo')
    let obj = {
        name: 'yaoding',
        age: 12
    }
    // dbase.collection('site').insert(obj, function(err, res) {
    //     if(err) {
    //         throw err;
    //     }
    //     console.log('data insert success...')
    //     db.close()
    // })
    let list = [{
        name: 'honey',
        age: 20
    }, {
        name: 'angle',
        age: 22
    }]
    dbase.collection('site').insertMany(list, function(err, res) {
        if (err) {
            throw err
        }
        console.log('you have insert ' + res.insertedCount + ' data')
        db.close()
    })
})