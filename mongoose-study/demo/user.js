let mongoose = require('./db.js'),
    Schema = mongoose.Schema;

let userSchema = new Schema({
    username: {
        type: String,
        index: true
    },
    userpwd: {
        type: String
    },
    userage: {
        type: Number
    },
    logindate: {
        type: Date,
        default: new Date()
    }
})
module.exports = mongoose.model('User', userSchema, 'User')