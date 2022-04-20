const axios = require('axios')

const { getSecret } = require('./secrets_provider')

const RECAPTCHA_VERIFY_TOKEN_URL = 'https://www.google.com/recaptcha/api/siteverify'

async function isReCAPTCHATokenValid (token) {
  const RECAPTCHA_SECRET_KEY = await getSecret('recaptcha.secret_key')
  const response = await axios.post(RECAPTCHA_VERIFY_TOKEN_URL, null, {
    params: {
      secret: RECAPTCHA_SECRET_KEY,
      response: token
    }
  })

  return response.data.success
}

exports.isReCAPTCHATokenValid = isReCAPTCHATokenValid
