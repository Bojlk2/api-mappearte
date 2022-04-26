const mongoose = require('mongoose')

const muralSchema = new mongoose.Schema({
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
        type: [{}]
    },
    activeMap: {
        type: Boolean
    }
})

module.exports = (mongoose.model('mural', muralSchema))