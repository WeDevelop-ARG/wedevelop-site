const dayjs = require('dayjs')
const { createDealNote, getDeal } = require('../services/hubspot')

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
    tracingId,
    stepName,
    ...fields
  } = req.body

  let message = `<b>Follow Up Form - Step "${stepName}"</b><br/><br/>`
  if (Object.keys(fields).length === 1) {
    message += Object.values(fields)[0]
  } else {
    message += '<ul>'
    Object.entries(fields).forEach(([field, value]) => {
      message += `<li><b>${field}:</b> ${value}</li>`
    })
    message += '</ul>'
  }

  console.log('FOLLOW_UP_CONTACT_FORM', JSON.stringify({ tracingId, message }))

  const deal = await getDeal(tracingId)

  if (dayjs().isAfter(dayjs(deal.createdAt).add(1, 'hour'))) {
    console.log('EXPIRED_FOLLOW_UP_CONTACT_FORM')

    return res.status(404).end()
  } else {
    await createDealNote(tracingId, { body: message })

    return res.status(200).end()
  }
}
