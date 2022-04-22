const express = require('express')
const router = express.Router()
const stickers = require('../models/sticker')
const auth = ('../middlewares/auth.js')

router.get('/', async (req, res) => {
    try {
        const allSticker = await stickers.getAll()
        res.json({
            ok: true,
            sticker: allSticker
        })
    } catch (error) {
        res.status(error.status || 500)
        res.json({
            ok: false,
            message: error.message
        })
    }
})

router.get('/', async (req, res) => {
    try {
      res.send({artistId: req.query._id})
    } catch (error) {
      res.status(error.status || 500)
      res.json({
        ok: false,
        message: error.message
      })
    }
  })

router.post('/', async (req, res) => {
    try {
        const stickerData = req.body
        const stickerCreated = await stickers.create(stickerData)
        res.json({
            ok: true,
            message: 'Sticker guardado correctamente',
            sticker: stickerCreated
        })
    } catch (error) {
        res.status(error.status || 500)
        res.json({
            ok: false,
            message: error.message
        })
    }
})