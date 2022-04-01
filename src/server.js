const express = require('express')
const cors = require('cors')

const artistRouter = require('./routes/artist.router')
const authRouter = require('./routes/auth.router')
const userRouter = require('./routes/user.router')

const app = express()

app.use(cors())
app.use(express.json())

app.use('/auth', authRouter)
app.use('/artist', artistRouter)
app.use('/user', userRouter)

app.get('/', (request, response) => {
    response.json({
        ok: true,
        message: 'MappearteApi'
    })
})

module.exports = app