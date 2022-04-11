const mongoose = require('mongoose')

const artistSchema = new mongoose.Schema({
    artist: {
        type: String,
        minlength: 2,
        maxlength: 20,
        required: true
    },
    isMural: {
        type: Boolean
    },
    isGraffiti: {
        type: Boolean
    },
    isSticker: {
        type: Boolean
    },
    name: {
        type: String,
        minlength: 2,
        maxlength: 20,
        require: true
    },
    lastName: {
        type: String,
        minlength: 2,
        maxlength: 40,
        require: false
    },
    email: {
        type: String,
        match: /(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/,
        minlength: 8,
        maxlength: 30,
        unique: true,
        required: true
    },
    password: {
        type: String,
        minlength: 8,
        required: true
    },
    city: {
        type: String,
        minlength: 5,
    },
    resume: {
        type: String,
        minlength: 10
    },
    bgImg: {
        type: String
    },
    imgArtist: {
        type: String
    }

})

module.exports = mongoose.model('artist', artistSchema)