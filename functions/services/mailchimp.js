const mailchimp = require('@mailchimp/mailchimp_marketing')

const { MAILCHIMP_API_KEY, MAILCHIMP_SERVER } = require('../constants')

mailchimp.setConfig({
  apiKey: MAILCHIMP_API_KEY,
  server: MAILCHIMP_SERVER
})

function addSubscriberToMailchimp ({ listId, subscriber }) {
  return mailchimp.lists.addListMember(listId, {
    email_address: subscriber.email,
    status: 'subscribed',
    merge_fields: {
      FNAME: subscriber.firstName,
      LNAME: subscriber.lastName
    }
  })
}

async function addTagsToMailchimpSubscriber ({
  listId,
  subscriberId,
  tags
}) {
  if (!Array.isArray(tags) || !tags.length) {
    console.log(
      `Ignoring empty mailchimp tags (listId=${
        listId
      };subscriberId=${
        subscriberId
      }):`,
      tags
    )

    return undefined
  }

  await mailchimp.lists.updateListMemberTags(
    listId,
    subscriberId,
    { tags: tags.map(name => ({ name, status: 'active' })) }
  )
}

exports.addSubscriberToMailchimp = addSubscriberToMailchimp
exports.addTagsToMailchimpSubscriber = addTagsToMailchimpSubscriber
