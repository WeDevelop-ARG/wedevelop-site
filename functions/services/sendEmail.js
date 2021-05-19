const axios = require('axios')

const { SENDGRID_API_KEY } = require('../constants')

async function sendEmail (data) {
  axios.post('https://api.sendgrid.com/v3/mail/send', data, {
    headers: {
      Authorization: `Bearer ${SENDGRID_API_KEY}`
    }
  })
}

exports.sendEmail = sendEmail
