const express = require('express')
const createError = require('http-errors')
const router = express.Router()
const streetArt = require('../usecases/streetart')
const auth = require('../middlewares/auth')


router.get('/', async (req, res) => {
    try {
        const type = req.query.type
        const artistId = req.query.artistId
        console.table(req.query)
        const filteredStreetArt = await streetArt.getFiltered(type, artistId)
        res.json({
            ok: true,
            data: {
                streetArt: filteredStreetArt
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
        const newStreetArt = await streetArt.create(req.body)
        res.json({
            ok: true,
            data: {
                streetArt: newStreetArt
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