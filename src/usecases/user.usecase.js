const bcrypt = require('bcrypt')
const createError = require('http-errors')
const jwt = require('../lib/jwt.lib')
const User = require('../models/user.model')

async function login(email, password) {
    const userFound = await User.findOne({email})
    if(!userFound) throw new createError(401, 'Datos inválidos')
    const isValidPassword = await bcrypt.compare(password, User.password)
    if(!isValidPassword) throw new createError(401, 'Datos inválidos')

    return jwt.signIn({ id: userFound._id})
}

async function create (userData) {
    const userFound = await User.findOne({email:userData.email})
    if(userFound) throw new createError(412, 'El usuario ya existe')

    const hash = await bcrypt.hash(userData.password, 15)
    userData.password = hash
    return User.create(userData)
}

function getAll() {
    return User.find()
}

function getByID(id) {
    return User.findById(id)
}

function deleteById(id) {
    return User.findByIdAndDelete(id)
}

function update(id, newUserData) {
    return User.findByIdAndUpdate(id, newUserData)
}

module.exports = {
    login,
    create,
    getAll,
    getByID,
    deleteById,
    update
}