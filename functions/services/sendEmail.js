const axios = require('axios')

const { getSecret } = require('./secrets_provider')

async function sendEmail (data) {
  const SENDGRID_API_KEY = await getSecret('sendgrid.api_key')

  return axios.post('https://api.sendgrid.com/v3/mail/send', data, {
    headers: {
      Authorization: `Bearer ${SENDGRID_API_KEY}`
    }
  })
}

exports.sendEmail = sendEmail
