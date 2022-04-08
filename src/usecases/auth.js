const createError = require('http-errors')
const Artist = require('../models/artist')
const User = require('../models/user')
const Token = require('../models/token')
const jwt = require('../lib/jwt')
const bcrypt = require('bcrypt')
const crypto = require('crypto')
const sendEmail = require('../utils/email/sendEmail')



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

async function requestResetPassword (email) {
    try {
        let findEmail = await User.findOne({email})
        if(!findEmail) {
            findEmail = await Artist.findOne({email})
        } else if(!findEmail) {
            throw new createError('¡El Email no existe!')
        }

        let token = await Token.findOne({id: findEmail._id})
        if(token) await token.deleteOne()

        let resetToken = crypto.randomBytes(32).toString('hex')
        const hash = await bcrypt.hash(resetToken, 15)

        await new Token({
            id: findEmail._id,
            token: hash,
            createdAt: Date.now()
        }).save()

        let link = `http://localhost:8080/passwordReset?token=${resetToken}&id=${findEmail._id}`

        sendEmail(
            findEmail.email,
            "Reestablecimiento de contraseña",
            {
                name: findEmail.name,
                link
            },
            '../utils/email/template/resetPAssword.handlebars'
        )
        return link
        


    } catch (error) {
        
    }
}

async function resetPassword (id, token, password) {
    try {
        
        let passwordResetToken = await Token.findOne({id})
        if(!passwordResetToken) throw new createError('No válido o token expirado')
    
        const isValid = await bcrypt.compare(token, passwordResetToken.token)
        if(!isValid) throw new createError('No válido o token expirado')
    
        const hash = await bcrypt.hash(password, 15)
        await User.updateOne(
            {_id: id},
            {$set: { password: hash}},
            {new: true}
        )
    // Me falta saber como traer la informacion de la base de datos de artistas
        const user = await User.findById({_id: id})
        sendEmail(
            user.email,
            'Password reestablecido exitosamente',
            {
                name: user.name,
           },
           '../utils/email/template/changePassword.handlebars'
        )
    
        await passwordResetToken.deleteOne()
    
        return true
    } catch (error) {
        response.status(error.status || 500)
        response.json({
            ok: false,
            message: error.message
        })
    }

}



module.exports = {
    login,
    requestResetPassword,
    resetPassword
}