let mongoClient = require('mongodb').MongoClient
let url = 'mongodb://127.0.0.1:27017/'

mongoClient.connect(url, function (err, db) {
    let dbase = db.db('runboo')
    dbase.collection('orders').aggregate([{
        $lookup: {
            from: 'products',
            localField: 'product_id',
            foreignField: 'id',
            as: 'orderDetails'
        }
    }], function (err, res) {
        console.log(res)
        db.close()
    })
})