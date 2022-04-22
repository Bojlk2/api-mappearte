const bcrypt = require('bcrypt')
const createError = require('http-errors')
const Artist = require('../models/artist')

async function create (artistData) {
    const artistFound = await Artist.findOne({email: artistData.email})
    if(artistFound) throw new createError(412, 'El artista ya existe')
    
    const hash = await bcrypt.hash(artistData.password, 15)
    artistData.password = hash
    return Artist.create(artistData)
}

function getAll() {
    return Artist.find()
}

function getByID (id) {
    return Artist.findById(id)
}

function deleteById(id) {
    return Artist.findByIdAndDelete(id)
}

function update(id, newArtistData) {
    return Artist.findByIdAndUpdate(id, newArtistData)
}

module.exports = {
    create,
    getAll,
    getByID,
    deleteById,
    update
}
