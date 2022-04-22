const Graffiti = require('../models/graffitti')

function create (graffitiData) {
    return Graffiti.create(graffitiData)
}

function getAll() {
    return Graffiti.find()
}

module.exports = {
    create,
    getAll
}