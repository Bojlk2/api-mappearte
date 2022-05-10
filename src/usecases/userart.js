const mongoose = require('mongoose')
const UserArt = require('../models/userart')

function create (userArtData) {
    return UserArt.create(userArtData)
}

function getFiltered(type, userId) {
    let filters = {}
    if(type != null) filters.type = type
    if(userId != null) filters.userId = mongoose.Types.ObjectId(userId)

    return UserArt.find(filters)
}

module.exports = {
    create,
    getFiltered
}