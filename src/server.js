const express = require('express')
const cors = require('cors')

const artistRouter = require('./routes/artist')
const authRouter = require('./routes/auth')
const userRouter = require('./routes/user')
const muralRouter = require('./routes/mural')
const graffitiRouter = require('./routes/graffiti')
const stickerRouter = require('./routes/sticker')

const app = express()

app.use(cors())
app.use(express.json())

app.use('/auth', authRouter)
app.use('/artist', artistRouter)
app.use('/user', userRouter)
app.use('/mural', muralRouter)
app.use('/graffiti', graffitiRouter)
app.use('/sticker', stickerRouter)

app.get('/', (request, response) => {
    response.json({
        ok: true,
        message: 'MappearteApi'
    })
})

module.exports = app