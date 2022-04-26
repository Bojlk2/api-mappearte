const Mural = require('../models/mural')

function create (muralData) {
    return Mural.create(muralData)
}

function getAll() {
    return Mural.find()
}

function getByID(id) {
    return Mural.findById(id)
}

module.exports = {
    create,
    getAll,
    getByID
}