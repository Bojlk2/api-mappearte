require('dotenv').config()
const mongoose = require('mongoose')
const server = require('./src/server')
const port = process.env.PORT

const {
    db_user,
    db_password,
    db_host,
    db_name
} = process.env

mongoose.connect(`mongodb+srv://${db_user}:${db_password}@${db_host}/${db_name}`)
.then(() => {
    console.log('Conectado a la DB')
})
.catch(error => {
    console.error('Error al conectar a la DB: ', error)
})

server.listen(port, () => {
    console.log('Mappearte esta listo en http://localhost:8080')
})