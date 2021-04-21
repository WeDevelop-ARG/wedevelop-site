const { isValidCalendlyURL, getCalendlyAPICallResult } = require('../services/calendly')
const { addSubscriberToMailchimp, addTagsToMailchimpSubscriber } = require('../services/mailchimp')

const { MAILCHIMP_DEFAULT_LIST_ID } = require('../constants')

module.exports = exports = function handleRequest (req, res) {
  res.set('Access-Control-Allow-Origin', '*')

  try {
    switch (req.method) {
      case 'OPTIONS': return handleOptionsRequest(req, res)
      case 'POST': return handlePostRequest(req, res)
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
  const { calendlyInviteeURI } = req.body

  if (!isValidCalendlyURL(calendlyInviteeURI)) {
    return res.status(401).end()
  }

  const { resource: invitee } = await getCalendlyAPICallResult(calendlyInviteeURI)
  const subscriber = await addSubscriberToMailchimp({
    listId: MAILCHIMP_DEFAULT_LIST_ID,
    subscriber: {
      firstName: invitee.name,
      lastName: '',
      email: invitee.email
    }
  })

  await addTagsToMailchimpSubscriber({
    listId: MAILCHIMP_DEFAULT_LIST_ID,
    subscriberId: subscriber.id,
    tags: getMailchimpTagsFromCalendlyInvitee(invitee)
  })

  res.status(200).end()
}

function getMailchimpTagsFromCalendlyInvitee ({
  tracking: { utm_campaign: source }
}) {
  switch (source) {
    case 'staff-augmentation': return ['LANDING_STAFF_AUG']
    case 'contact': return ['WEB_WEDEV']
    default: return ['CALENDLY_EVENT_UNKNOWN_SOURCE']
  }
}
