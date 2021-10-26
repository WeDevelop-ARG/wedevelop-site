const { isValidCalendlyURL, getCalendlyAPICallResult } = require('../services/calendly')
const { createContactIfNotExists, createMeeting } = require('../services/hubspot')

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
  const { calendlyInviteeURI, calendlyEventURI, followUpTracingId } = req.body

  if (!isValidCalendlyURL(calendlyInviteeURI) || !isValidCalendlyURL(calendlyEventURI)) {
    return res.status(401).end()
  }

  const { resource: invitee } = await getCalendlyAPICallResult(calendlyInviteeURI)
  const { resource: event } = await getCalendlyAPICallResult(calendlyEventURI)

  const contactId = await createContactIfNotExists({
    name: invitee.name || `${invitee.first_name} ${invitee.last_name}`,
    email: invitee.email
  })

  await createMeeting({
    contactId,
    dealId: followUpTracingId,
    startTime: event.start_time,
    endTime: event.end_time,
    title: event.name,
    description: `<b>Meeting scheduled through WeDevelop's website</b><br /><br /><b>Questions and answers:</b><br />${
      JSON.stringify(invitee.questions_and_answers)
    }`,
    internalNotes: `
      <ul>
        <li><b>Text Reminder Number:</b>${invitee.text_reminder_number}</li>
        <li><b>Timezone:</b>${invitee.timezone}</li>
        <li><b>Tracking:</b>${JSON.stringify(invitee.tracking)}</li>
      </ul>
    `
  })

  res.status(200).end()
}
