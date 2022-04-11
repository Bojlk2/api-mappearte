const jwt = require('../lib/jwt')

function auth (req, resp, next) {
    try {
        const authorization = req.headers.authorization || ''
        const token = authorization.replace('Bearer ','')
        const isTokenValid = jwt.verify(token)
        console.log('Token válido: ', isTokenValid)
        next()
    } catch (error) {
        resp.status(401)
        resp.json({
            ok: false,
            error: error.message
        })        
    }
}

module.exports = auth