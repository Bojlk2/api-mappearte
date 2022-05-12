const mongoose = require('mongoose')

const streetArtSchema = new mongoose.Schema({
    isMural: {
        type: Boolean
    },
    isGraffiti: {
        type: Boolean
    },
    isSticker: {
        type: Boolean
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
        default: Date.now
    },
    artistId: {
        type: [mongoose.Types.ObjectId],
        ref: 'artist'
    },
    activeMap: {
        type: Boolean
    }
})

module.exports = (mongoose.model('streetArt', streetArtSchema))