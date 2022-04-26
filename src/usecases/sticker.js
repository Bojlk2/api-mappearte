const Sticker = require('../models/sticker')

function create (stickerData) {
    return Sticker.create(stickerData)
}

function getAll() {
    return Sticker.find()
}

function getByID (id) {
    return Sticker.findById(id)
}

module.exports = {
    create,
    getAll,
    getByID
}