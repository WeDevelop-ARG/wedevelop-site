const { getDeal, getContact } = require('../services/hubspot')

module.exports = exports = async function handleRequest (req, res) {
  res.set('Access-Control-Allow-Origin', '*')
  try {
    switch (req.method) {
      case 'OPTIONS': return await handleOptionsRequest(req, res)
      case 'GET': return await handlePostRequest(req, res)
      default: res.status(405).end()
    }
  } catch (err) {
    console.error(err)
    res.status(500).end()
  }
}

function handleOptionsRequest (req, res) {
  res.set('Access-Control-Allow-Methods', 'GET')
  res.set('Access-Control-Allow-Headers', 'Content-Type')
  res.set('Access-Control-Max-Age', '3600')
  res.status(204).end()
}

async function handlePostRequest (req, res) {
  const { tracingId } = req.query

  const deal = await getDeal(tracingId)
  const contactId = deal?.associations?.contacts?.results?.[0]?.id

  if (!contactId) {
    return res.status(404).end()
  }

  const contact = await getContact(contactId)

  res.status(200).json({
    firstName: contact.properties.firstname,
    lastName: contact.properties.lastname
  })
}
