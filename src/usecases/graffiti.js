const Graffiti = require('../models/graffitti')

function create (graffitiData) {
    return Graffiti.create(graffitiData)
}

function getAll() {
    return Graffiti.find()
}

function getByID (id) {
    return Graffiti.findById(id)
}

module.exports = {
    create,
    getAll,
    getByID
}