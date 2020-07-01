const express = require('express')
const nodemailer = require('nodemailer')
const bodyParser = require('body-parser')

const port = process.env.PORT || 3000

const emailTo = process.env.EMAIL_TO
const emailFrom = process.env.EMAIL_FROM
const emailUsername = process.env.EMAIL_USERNAME
const emailPassword = process.env.EMAIL_PASSWORD

const sendEmail = (text, subject) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: emailUsername,
      pass: emailPassword
    }
  })

  const mailOptions = {
    from: emailFrom,
    to: emailTo,
    subject: subject,
    text: text
  }

  return transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.error('Error sending email', JSON.stringify({ message: error.message }))
    }

    return console.debug('Successfully sent email', JSON.stringify({ info }))
  })
}

const urlencodedParser = bodyParser.urlencoded({ extended: false })

express()
  .use(express.static('public', {
    extensions: [
      'html'
    ]
  }))
  .use(urlencodedParser)
  .post('/call', req => {
    const { name, phone, email, select } = req.body

    const subject = `Masks4You - Please Call Me!`
    const text = `Hi there,
    
${name} has requested that you call them back on ${phone} or contact them via email on ${email} to discuss more about ${select}

Sincerely,
Masks4You`

    sendEmail(text, subject)
  })
  .post('/contact', req => {
    const { name, email, message } = req.body

    const subject = `Masks4You - Contact Form!`
    const text = `Hi there,
    
${name} has asked a question.

"${message}"

To get back to ${name}, drop them on email at ${email}

Sincerely,
Masks4You`

    sendEmail(text, subject)
  })
  .listen(port, () => console.log('Listing on port', { port }))

