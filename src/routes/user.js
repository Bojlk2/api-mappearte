const express = require('express')
const createError = require('http-errors')
const users = require('../usecases/user.usecase')
const router = express.Router()
const auth = require('../middlewares/auth.middleware')

// router.use(auth)

router.get('/', async (request, response) => {
    try {
        const allUser = await users.getAll()
        response.json({
            ok: true,
            users: allUser
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
        const userFound = await users.getByID(request.params.id)
        if(!userFound) throw new createError(404, 'Usuario no encontrado')
        response.json({
            ok: true,
            users: userFound
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
        const userData = request.body
        const userCreated = await users.create(userData)
        response.json({
            ok: true,
            message: '¡Usuario creado con éxito!',
            user: userCreated
        })
    } catch (error) {
        response.status(error.status || 500)
        response.json({
            ok: false,
            message: error.message
        })
    }
})

router.patch('/:id', auth, async (response, request) => {
    try {
        const userUpdate = await users.update((request.params.id), (request.body))
        if(!userUpdate) throw new createError(404, 'Usuario no encontrado')
        response.json({
            ok: true,
            message: 'Tu información ha sido actualizada',
            user: userUpdate
        })
    } catch (error) {
        response.status(error.status || 500)
        response.json({
            ok: false,
            message: error.message
        })
    }
 })

 router.delete('/:id', auth, async (response, request) => {
     try {
         const userDeleted = await users.deleteById(request.params.id)
         if(!userDeleted) throw new createError(404, 'Usuario no encontrado')
     } catch (error) {
        response.status(error.status || 500)
        response.json({
            ok: false,
            message: error.message
        })
    }
 })

 module.exports = router