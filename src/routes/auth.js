const express = require('express')
const createError = require('http-errors')
const {login, requestResetPassword, resetPassword} = require('../usecases/auth')
const router = express.Router()

router.post('/login', async(request, response) => {
    try {
        const {email, password} = request.body
        
        if(!email) throw new createError(400, 'El email es requerido')
        if(!password) throw new createError(400, 'El password es requerido')

        
        const token = await login(email, password)

        response.json({
            ok: true,
            message: 'Acceso correcto',
            token
        })
    } catch (error) {
        response.status(error.status || 500)
        response.json({
            ok: false,
            error: error.message || 'Desconocido'
        })
    }
})

router.post('/requestResetPassword', requestResetPassword)
router.post('/resetPassword', resetPassword)

module.exports = router