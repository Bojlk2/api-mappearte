const createError = require('http-errors')
const Artist = require('../models/artist.model')
const User = require('../models/user.model')
const jwt = require('../lib/jwt.lib')
const bcrypt = require('bcrypt')


async function login(email, password) {
        let role = 'user'
        let findEmail = await User.findOne({email})
        
        if(!findEmail) {
            role = 'artist'
            findEmail = await Artist.findOne({email})
            
        }else if(!findEmail) {
            throw new createError(401, 'Credenciales Incorrectas')
        }

        const isValidPassword = await bcrypt.compare(password, findEmail.password)
        if(!isValidPassword) throw new createError(401, 'Datos Inválidos')

        return jwt.signIn({ id: findEmail._id, role})
}

module.exports = login