const axios = require('axios')

const { SENDGRID_API_KEY } = require('../constants')

function sendEmail (data) {
  return axios.post('https://api.sendgrid.com/v3/mail/send', data, {
    headers: {
      Authorization: `Bearer ${SENDGRID_API_KEY}`
    }
  })
}

exports.sendEmail = sendEmail
