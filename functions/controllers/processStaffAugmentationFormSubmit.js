const { addSubscriberToMailchimp, addTagsToMailchimpSubscriber } = require('../services/mailchimp')
const { getMailchimpTags } = require('../services/getMailchimpTags')

const { MAILCHIMP_DEFAULT_LIST_ID } = require('../constants')

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
  const subscriber = await addSubscriberToMailchimp({
    listId: MAILCHIMP_DEFAULT_LIST_ID,
    subscriber: { email: req.body.email }
  })

  await addTagsToMailchimpSubscriber({
    listId: MAILCHIMP_DEFAULT_LIST_ID,
    subscriberId: subscriber.id,
    tags: getMailchimpTags('staff-augmentation')
  })

  res.status(200).end()
}
