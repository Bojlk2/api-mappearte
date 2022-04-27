const mongoose = require('mongoose')

const streetartSchema = new mongoose.Schema({
    type: {
        type: String,
        enum: ['sticker', 'mural', 'graffiti'],
        required: true
    },
    lat: {
        type: String,
        required: true
    },
    lng: {
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    muralImg: {
        type: String,
        required: true
    },
    uploadDate: {
        type: Date,
        required: true
    },
    artistId: {
        type: [mongoose.Types.ObjectId],
        ref: 'artist'
    },
    activeMap: {
        type: Boolean
    }
})

module.exports = (mongoose.model('streetart', streetartSchema))