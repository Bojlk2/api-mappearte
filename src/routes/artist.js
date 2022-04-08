const express = require('express')
const createError = require('http-errors')
const artists = require('../usecases/artist')
const router = express.Router()
const auth = require('../middlewares/auth')

// router.use(auth)

router.get('/', async (request, response) => {
    try {
        const allArtist = await artists.getAll()
        response.json({
            ok: true,
            artists: allArtist
        })
    } catch (error) {
        response.status(error.status || 500)
        response.json({
            ok: false,
            message: error.message
        })
    }
})

router.get('/:id', async (request, response) => {
    try {
        const artistFound = await artists.getByID(request.params.id)
        if(!artistFound) throw new createError(404, 'Artista no encontrado')
        response.json({
            ok: true,
            artists: artistFound
        })
    } catch (error) {
        response.status(error.status || 500)
        response.json({
            ok: false,
            message: error.message
        })
    }
})

router.post('/', async(request, response) => {
    try {
        const artistData = request.body
        const artistCreated = await artists.create(artistData)
        response.json({
            ok: true,
            message: '¡Artista creado con éxito!',
            artist: artistCreated
        })
    } catch (error) {
        response.status(error.status || 500)
        response.json({
            ok: false,
            message: error.message
        })
    }
})

router.patch('/:id', async (response, request) => {
    try {
        const artistUpdate = await artists.update((request.params.id), (request.body))
        if(!artistUpdate) throw new createError(404, 'Artista no encontrado')
        response.json({
            ok: true,
            message: 'Tu información ha sido actualizada',
            artist: artistUpdate
        })
    } catch (error) {
        response.status(error.status || 500)
        response.json({
            ok: false,
            message: error.message
        })
    }
 })

 router.delete('/:id', async (response, request) => {
     try {
         const artistDeleted = await artists.deleteById(request.params.id)
         if(!artistDeleted) throw new createError(404, 'Artista no encontrado')
     } catch (error) {
        response.status(error.status || 500)
        response.json({
            ok: false,
            message: error.message
        })
    }
 })

 module.exports = router