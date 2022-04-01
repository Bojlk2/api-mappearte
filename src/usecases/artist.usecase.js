const bcrypt = require('bcrypt')
const createError = require('http-errors')
const jwt = require('../lib/jwt.lib')
const Artist = require('../models/artist.model')

async function login(email, password) {
    const artistFound = await Artist.findOne({email})
    if(!artistFound) throw new createError(401, 'Datos Inválidos')

    const isValidPassword = await bcrypt.compare(password, artistFound.password)
    if(!isValidPassword) throw new createError(401, 'Datos Inválidos')

    return jwt.signIn({ id: artistFound._id})
}

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
    return User.findByIdAndUpdate(id, newArtistData)
}

module.exports = {
    login,
    create,
    getAll,
    getByID,
    deleteById,
    update
}
