const mongoose = require('mongoose')
const Schema = mongoose.Schema

const tokenSchema = new Schema({
    id: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'user'
    },
    token: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: 1200
    }
})

module.export = mongoose.model('token', tokenSchema)