const {
  addSubscriberToMailchimp,
  addTagsToMailchimpSubscriber,
  addNoteToMailchimpSubscriber
} = require('../services/mailchimp')
const { getMailchimpTags } = require('../services/getMailchimpTags')
const { isReCAPTCHATokenValid } = require('../services/recaptcha')
const { sendEmail } = require('../services/sendEmail')

const { MAILCHIMP_DEFAULT_LIST_ID, CONTACT_FORM_DESTINATION_EMAIL } = require('../constants')

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
  const message = `
      New message received from Free Quote form, ${getMailchimpTags(req.body.formOrigin)} landing page.

      ${req.body.name} (${req.body.email}) says:

      ${req.body.message}
  `
  const data = {
    personalizations: [{
      to: [{ email: CONTACT_FORM_DESTINATION_EMAIL }],
      subject: 'New message from WeDevelop site'
    }],
    from: { email: CONTACT_FORM_DESTINATION_EMAIL },
    content: [{
      type: 'text/plain',
      value: message
    }]
  }

  if (!await isReCAPTCHATokenValid(req.body.recaptchaToken)) {
    return res.status(403).end()
  }

  console.log('STAFF_AUGMENTATION_FORM_SUBMIT', JSON.stringify(data))
  console.log(`FORM_ORIGIN ${req.body.formOrigin}`)

  await sendEmail(data)

  const subscriber = await addSubscriberToMailchimp({
    listId: MAILCHIMP_DEFAULT_LIST_ID,
    subscriber: {
      email: req.body.email,
      firstName: req.body.name
    }
  })

  await addTagsToMailchimpSubscriber({
    listId: MAILCHIMP_DEFAULT_LIST_ID,
    subscriberId: subscriber.id,
    tags: getMailchimpTags(req.body.formOrigin)
  })

  await addNoteToMailchimpSubscriber({
    listId: MAILCHIMP_DEFAULT_LIST_ID,
    subscriberId: subscriber.id,
    note: req.body.message
  })

  return res.status(200).end()
}
