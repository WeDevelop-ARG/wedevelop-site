const { createContactIfNotExists, createContactNote } = require('../services/hubspot')

module.exports = exports = async function handleRequest (req, res) {
  res.set('Access-Control-Allow-Origin', '*')
  try {
    switch (req.method) {
      case 'OPTIONS': return await handleOptionsRequest(req, res)
      case 'POST': return await handlePostRequest(req, res)
      default: res.status(405).end()
    }
  } catch (err) {
    console.error(err)
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
    formOrigin,
    filePath,
    message,
    company
  } = req.body

  const contact = { name, email }
  const deal = { name: `${name} (${email})` }
  const note = { body: `<b>Sent from:</b> ${formOrigin}<br/><b>Company:</b>${company}<br/><b>File Path:</b>${filePath}<b>Message:</b><br/><br/>${message}` }

  console.log('INITIAL_LANDING_CONTACT_FORM', JSON.stringify({ contact, deal, note }))

  const contactId = await createContactIfNotExists(contact)
  await createContactNote(contactId, note)

  return res.status(200).json({ tracingId: contactId })
}
