const mongoose = require('mongoose')

const stickerSchema = new mongoose.Schema({
    location: {
        type: [String],
        require: true
    },
    address:{
        type: String,
        require: true
    },
    muralImg: {
        type: String,
        require: true
    },
    uploadDate: {
        type: Date,
        required: true
    },
    artistId: {
        type: [{}]
    },
    activeMap: {
        type: Boolean
    }
})

module.exports = (mongoose.model('sticker', stickerSchema))