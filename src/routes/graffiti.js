const express = require('express')
const createError = require ('http-errors')
const router = express.Router()
const graffitis = require('../models/graffitti')
const auth = require('../middlewares/auth')

router.get('/', async (req, res) => {
    try {
      const allGraffiti = await graffitis.getAll()
      res.json({
        ok: true,
        graffiti: allGraffiti
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
    const graffitiData = req.body
    const graffitiCreated = await graffitis.create(graffitiData)
    res.json({
      ok: true,
      message: 'Graffiti guardado correctamente',
      graffiti: graffitiCreated
    })
  } catch (error) {
    res.status(error.status || 500)
      res.json({
        ok: false,
        message: error.message
      })
    }
})
