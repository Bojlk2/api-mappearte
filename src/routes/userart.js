const express = require('express')
const createError = require('http-errors')
const router = express.Router()
const userArt = require('../usecases/userart')
const auth = require('../middlewares/auth')


router.get('/', async (req, res) => {
    try {
        const type = req.query.type
        const userId = req.query.userId
        console.table(req.query)
        const filteredUserArt = await userArt.getFiltered(type, userId)
        res.json({
            ok: true,
            data: {
                userArt: filteredUserArt
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
        const newUserArt = await userArt.create(req.body)
        res.json({
            ok: true,
            data: {
                userArt: newUserArt
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