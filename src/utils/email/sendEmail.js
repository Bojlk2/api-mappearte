require('dotenv').config()
const nodemailer = require('nodemailer')
const handlebars = require('handlebars')
const fs = require('fs')
const path = require('path')
const res = require('express/lib/response')

async function sendEmail(email, subject, payload, template) {
    try {
        const transporter = nodemailer.createTransport({
          service: 'gmail',
          host: process.env.EMAIL_HOST,
          auth: {
            user: process.env.EMAIL_USERNAME,
            pass: process.env.EMAIL_PASSWORD
          }
        })

        const source = fs.readFileSync(path.join(__dirname, template), 'utf8')
        const compiledTemplate = handlebars.compile(source)
        const options = () => {
          return {
            from: 'mappearte1@gmail.com',
            to: email,
            subject: subject,
            html: compiledTemplate(payload)
          }
        }

        transporter.sendMail(options(), (error, info) => {
          if(error) {
            return error
          } else {
            return res.status(200).json({
              ok: true
            })
          }
        })
    } catch (error) {
      res.status(error.status || 500)
      res.json({
          ok: false,
          message: error.message
      })
    }
}

module.exports = sendEmail