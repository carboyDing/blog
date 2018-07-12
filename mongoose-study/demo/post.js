let mongoose = require('mongoose')
let Schema = mongoose.Schema

let PostSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String
    },
    content: {
        type: String
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
        index: true
    },
    imgUrl: {
        type: String
    },
    recommend: {
        type: Boolean
    },
    index: {
        type: Number
    }
}, {
        timestamps: true
    }
)

module.exports = mongoose.model('Post', PostSchema, 'Post')