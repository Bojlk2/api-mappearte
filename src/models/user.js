const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    user: {
        type: String,
        minlength: 2,
        maxlength: 20,
        required: true
    },
    isMural: {
        type: Boolean
    },
    isGraffitti: {
        type: Boolean
    },
    isSticker: {
        type: Boolean
    },
    name: {
        type: String,
        minlength: 2,
        maxlength: 20,
        required: true
    },
    lastName: {
        type: String,
        minlength: 2,
        maxlength: 40,
        required: false
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
    bgImg: {
        type: String
    },
    imgUser: {
        type: String
    }

})

module.exports = mongoose.model('user', userSchema)