const router = require('express').Router()
const User = require('../models/user')
const Token = require('../models/token')
const crypto = require('crypto')
const sendEmail = require('../utils/email/sendEmail')
const Joi = require('joi')
const passwordComplexity = require('joi-password-complexity')
const bcrypt = require('bcrypt')

router.post('/', async (req, res) => {
    const emailSchema = Joi.object({
        email: email
    })
})