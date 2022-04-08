const bcrypt = require('bcrypt')
const createError = require('http-errors')
const User = require('../models/user')

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
    create,
    getAll,
    getByID,
    deleteById,
    update
}