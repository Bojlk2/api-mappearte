const express = require('express')
const createError = require('http-errors')
const router = express.Router()
const streetart = require('../usecases/streetart')
const auth = require('../middlewares/auth')

router.get('/', async (req, res) => {
    try {
        const type = req.query.type
        const artistId = req.query.artistId
        const filteredStreetart = await streetart.getFiltered(type, artistId)
        res.json({
            ok: true,
            data: {
                streetart: filteredStreetart
            }
        })
    } catch (error) {
        res.status(error.status || 500)
        res.json({
            ok: false,
            message: error.message
        })
    }
})

router.post('/', async(req, res) => {
    try {
        const newStreetart = await streetart.create(req.body)
        res.json({
            ok: true,
            data: {
                streetart: newStreetart
            }
        })
    } catch (error) {
        res.status(error.status || 500)
        res.json({
            ok: false,
            message: error.message
        })
    }
})

module.exports = router