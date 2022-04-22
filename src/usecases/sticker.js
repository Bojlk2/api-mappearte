const Sticker = require('../models/sticker')

function create (stickerData) {
    return Sticker.create(stickerData)
}

function getAll() {
    return Sticker.find()
}

module.exports = {
    create,
    getAll
}