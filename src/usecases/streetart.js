const Streetart = require('../models/streetart')

function create (streetartData) {
    return Streetart.create(streetartData)
}

function getFiltered(type, artistId) {
    let filters = {}
    if(type != null) filters.type = type
    if(type != null) filters.artist = {$in: [artistId]}
    return Streetart.find(filters)
}

module.exports = {
    create,
    getFiltered
}