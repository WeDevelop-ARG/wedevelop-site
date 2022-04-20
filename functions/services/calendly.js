const axios = require('axios')

const { CALENDLY_API_BASE_URL } = require('../constants')
const { getSecret } = require('./secrets_provider')

function isValidCalendlyURL (calendlyInviteeURI) {
  return calendlyInviteeURI.startsWith(CALENDLY_API_BASE_URL)
}

async function getCalendlyAPICallResult (calendlyInviteeURI) {
  const CALENDLY_ACCESS_TOKEN = await getSecret('calendly.access_token')
  const response = await axios.get(calendlyInviteeURI, {
    headers: { Authorization: `Bearer ${CALENDLY_ACCESS_TOKEN}` }
  })

  return response.data
}

exports.isValidCalendlyURL = isValidCalendlyURL
exports.getCalendlyAPICallResult = getCalendlyAPICallResult
