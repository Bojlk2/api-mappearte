const express = require('express')
const createError = require('http-errors')
const router = express.Router()
const murals = require('../usecases/mural')
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

router.get('/:id', async (req, res) => {
    try {
        const muralFound = await murals.getByID(request.params.id)
        if(!muralFound) throw new createError(404, 'Mural no encontrado')
        response.json({
            ok: true,
            murals: muralFound
        })
    } catch (error) {
        res.status(error.status || 500)
        res.json({
            ok: false,
            message: error.message
        })
    }
})

router.get('/:artistId', async (req, res) => {
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

module.exports = router