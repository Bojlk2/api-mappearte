const express = require('express')
const cors = require('cors')

const artistRouter = require('./routes/artist')
const authRouter = require('./routes/auth')
const userRouter = require('./routes/user')
const streetArtRouter = require('./routes/streetart')

const app = express()

app.use(express.json())
app.use(cors())

app.use('/auth', authRouter)
app.use('/artist', artistRouter)
app.use('/user', userRouter)
app.use('/streetart', streetArtRouter)

app.get('/', (request, response) => {
    response.json({
        ok: true,
        message: 'MappearteApi'
    })
})

module.exports = app