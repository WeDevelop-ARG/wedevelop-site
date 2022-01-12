const { BLOG_NEWSLETTER_ID } = require('../constants')
const { createContactIfNotExists } = require('../services/hubspot')
const { subscribeContactToNewsletter } = require('../services/subscribeContactToNewsletter')

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
    email
  } = req.body

  const contact = { email }

  console.log('INITIAL_BLOG_NEWSLETTER_FORM', JSON.stringify({ contact }))

  const contactId = await createContactIfNotExists(contact)
  await subscribeContactToNewsletter({
    emailAddress: email,
    subscriptionId: BLOG_NEWSLETTER_ID
  })

  return res.status(200).json({ tracingId: contactId })
}
