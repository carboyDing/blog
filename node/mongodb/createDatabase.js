let MongoClient = require('mongodb').MongoClient;
let url = "mongodb://localhost:27017/runoob";

MongoClient.connect(url, function (err, db) {
    if (err) {
        throw err;
    }
    console.log('Database has created...')
})