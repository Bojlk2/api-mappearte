const express = require('express')
const createError = require('http-errors')
const router = express.Router()
const murals = require('../models/mural')
const auth = require('../middlewares/auth')

router.get('/', async (req, res) => {
    try {
        const allMural = await murals.getAll()
        res.json({
            ok: true,
            mural: allMural
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

router.post('/', async(req, res) => {
    try {
        const muralData = req.body
        const muralCreated = await murals.create(muralData)
        res.json({
            ok: true,
            message: 'Mural guardado exitosamente',
            mural: muralCreated
        })
    } catch (error) {
        res.status(error.status || 500)
        res.json({
            ok: false,
            message: error.message
        })
    }
})
