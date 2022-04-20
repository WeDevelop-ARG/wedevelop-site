const mailchimp = require('@mailchimp/mailchimp_marketing')
const md5 = require('md5')

const { MAILCHIMP_SERVER } = require('../constants')
const { getSecret } = require('./secrets_provider')

async function configureMailchimp () {
  const MAILCHIMP_API_KEY = await getSecret('mailchimp.api_key')
  mailchimp.setConfig({
    apiKey: MAILCHIMP_API_KEY,
    server: MAILCHIMP_SERVER
  })
}

async function addSubscriberToMailchimp ({ listId, subscriber }) {
  const subscriberHash = md5(subscriber.email.toLowerCase())

  return mailchimp.lists.setListMember(listId, subscriberHash, {
    email_address: subscriber.email,
    status_if_new: 'subscribed',
    merge_fields: {
      FNAME: subscriber.firstName || '',
      LNAME: subscriber.lastName || ''
    }
  })
}

async function addTagsToMailchimpSubscriber ({ listId, subscriberId, tags }) {
  if (!Array.isArray(tags) || !tags.length) {
    console.log(`Ignoring empty mailchimp tags (listId=${listId};subscriberId=${subscriberId}):`, tags)

    return undefined
  }

  await mailchimp.lists.updateListMemberTags(listId, subscriberId, {
    tags: tags.map((name) => ({ name, status: 'active' }))
  })
}

async function addNoteToMailchimpSubscriber ({ listId, subscriberId, note }) {
  await mailchimp.lists.createListMemberNote(listId, subscriberId, { note })
}

configureMailchimp()

exports.addSubscriberToMailchimp = addSubscriberToMailchimp
exports.addTagsToMailchimpSubscriber = addTagsToMailchimpSubscriber
exports.addNoteToMailchimpSubscriber = addNoteToMailchimpSubscriber
