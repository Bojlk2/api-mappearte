const jwt = require('jsonwebtoken')
const {JWT_SECRET} = process.env

function signIn (payload = {}) {
    return jwt.sign(payload, JWT_SECRET, {expiresIn: '2h'})
}

function verify (token) {
    return jwt.verify(token, JWT_SECRET)
}

module.exports = {
    signIn,
    verify
}