const { error } = require('../services/logging')
const { createContactIfNotExists, createDeal, createDealNote } = require('../services/hubspot')
const { isReCAPTCHATokenValid } = require('../services/recaptcha')

module.exports = exports = async function handleRequest (req, res) {
  res.set('Access-Control-Allow-Origin', '*')
  try {
    switch (req.method) {
      case 'OPTIONS': return await handleOptionsRequest(req, res)
      case 'POST': return await handlePostRequest(req, res)
      default: res.status(405).end()
    }
  } catch (err) {
    error(err)
    res.status(500).end()
  }
}

function handleOptionsRequest (req, res) {
  res.set('Access-Control-Allow-Methods', 'POST')
  res.set('Access-Control-Allow-Headers', 'Content-Type')
  res.set('Access-Control-Max-Age', '3600')
  res.status(204).end()
}

async function handlePostRequest (req, res) {
  const {
    name,
    email,
    recaptchaToken,
    formOrigin,
    message
  } = req.body

  // if (!await isReCAPTCHATokenValid(recaptchaToken)) {
  //   return res.status(403).end()
  // }

  const contact = { name, email }
  const deal = { name: `${name} (${email})` }
  const note = { body: `<b>Sent from:</b> ${formOrigin}<br/><b>Message:</b><br/><br/>${message}` }

  console.log('INITIAL_LANDING_CONTACT_FORM', JSON.stringify({ contact, deal, note }))

  const contactId = await createContactIfNotExists(contact)
  const dealId = await createDeal(contactId, deal)
  await createDealNote(dealId, note)

  return res.status(200).json({ tracingId: dealId })
}
