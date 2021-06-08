const { addSubscriberToMailchimp, addTagsToMailchimpSubscriber } = require('../services/mailchimp')
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
      New message received from Free Quote form, Staff Augmentation landing page.

      ${req.body.name} says:

      ${req.body.message}
  `
  const data = {
    personalizations: [{
      to: [{ email: CONTACT_FORM_DESTINATION_EMAIL }],
      subject: 'New message from WeDevelop site'
    }],
    from: {
      email: req.body.email
    },
    content: [{
      type: 'text/plain',
      value: message
    }]
  }

  if (!await isReCAPTCHATokenValid(req.body.recaptchaToken)) {
    return res.status(403).end()
  }

  console.log('STAFF_AUGMENTATION_FORM_SUBMIT', JSON.stringify(data))

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
    tags: getMailchimpTags('staff-augmentation')
  })

  return res.status(200).end()
}
