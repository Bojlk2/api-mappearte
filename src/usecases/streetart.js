const mongoose = require('mongoose')
const StreetArt = require('../models/streetArt')

function create (streetArtData) {
    return StreetArt.create(streetArtData)
}

function getFiltered(type, artistId) {
    let filters = {}
    if(type != null) filters.type = type
    if(artistId != null) filters.artistId = mongoose.Types.ObjectId(artistId)

    return StreetArt.find(filters)
}

module.exports = {
    create,
    getFiltered
}