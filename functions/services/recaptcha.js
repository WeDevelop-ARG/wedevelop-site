const axios = require('axios')

const { RECAPTCHA_SECRET_KEY } = require('../constants')

const RECAPTCHA_VERIFY_TOKEN_URL = 'https://www.google.com/recaptcha/api/siteverify'
async function isReCAPTCHATokenValid (token) {
  const response = await axios.post(RECAPTCHA_VERIFY_TOKEN_URL, {
    secret: RECAPTCHA_SECRET_KEY,
    response: token
  })
  return response.data.success
}

exports.isReCAPTCHATokenValid = isReCAPTCHATokenValid
