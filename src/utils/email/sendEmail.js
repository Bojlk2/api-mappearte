require('dotenv').config()
const nodemailer = require('nodemailer')

const sendEmail = async (email, subject, text) => {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      service: 'gmail'
    })
  } catch (error) {
    
  }
}


module.exports = sendEmail