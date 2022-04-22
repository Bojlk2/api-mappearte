const Mural = require('../models/mural')

function create (muralData) {
    return Mural.create(muralData)
}

function getAll() {
    return Mural.find()
}

module.exports = {
    create,
    getAll
}