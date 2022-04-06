const createError = require('http-errors')
const Artist = require('../models/artist')
const User = require('../models/user')
const jwt = require('../lib/jwt')
const bcrypt = require('bcrypt')
const { response } = require('express')


async function login(email, password) {
    try {
        let role = 'user'
        let findEmail = await User.findOne({email})
        
        if(!findEmail) {
            role = 'artist'
            findEmail = await Artist.findOne({email})
            
        }
        else if(!findEmail) {
            throw new createError(401, 'Credenciales Incorrectas')
        }

        const isValidPassword = await bcrypt.compare(password, findEmail.password)
        if(!isValidPassword) throw new createError(401, 'Datos Inválidos')

        return jwt.signIn({ id: findEmail._id, role})
        
    } catch (error) {
        response.json({
            ok: false        
        })
    }
}

module.exports = login