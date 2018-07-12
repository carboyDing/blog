let mongoose = require('mongoose')
let url = 'mongodb://localhost:27017/'

mongoose.connect(url, {}, function(err) {
    if(err) {
        throw err
    } else {
        console.log('success connect ...')
    }
})