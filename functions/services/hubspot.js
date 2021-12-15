const hubspot = require('@hubspot/api-client')
const dayjs = require('dayjs')

const { HUBSPOT_API_KEY, HUBSPOT_LANDING_DEAL_PIPELINE_STAGE, HUBSPOT_LANDING_DEAL_PIPELINE_NAME } = require('../constants')

const hubspotClient = new hubspot.Client({
  apiKey: HUBSPOT_API_KEY
})

exports.getContact = async function getContact (contactId, idProperty) {
  const response = await hubspotClient.crm.contacts.basicApi.getById(
    contactId,
    undefined,
    undefined,
    true,
    idProperty
  )

  return response.body
}

exports.createContact = async function createContact ({ name, email } = {}) {
  const properties = {
    email: email,
    firstname: name
  }
  const SimplePublicObjectInput = { properties }
  const apiResponse = await hubspotClient.crm.contacts.basicApi.create(SimplePublicObjectInput)

  return apiResponse.body.id
}

exports.createContactIfNotExists = async function upsertContact ({ name, email } = {}) {
  try {
    const contact = await exports.getContact(email, 'email')

    return contact.id
  } catch (err) {
    if (err.response && err.response.statusCode === 404) {
      return exports.createContact({ name, email })
    }
  }
}

exports.getDeal = async function getDeal (dealId, { considerExpiredAfterSeconds = 3600 } = {}) {
  const apiResponse = await hubspotClient.crm.deals.basicApi.getById(dealId, undefined, ['contact'])
  const deal = apiResponse.body

  if (considerExpiredAfterSeconds > 0 && dayjs().isAfter(dayjs(deal.createdAt).add(considerExpiredAfterSeconds, 'seconds'))) {
    return undefined
  }

  return deal
}

exports.createDeal = async function createDeal (contactId, { name } = {}) {
  const properties = {
    dealname: name,
    dealstage: HUBSPOT_LANDING_DEAL_PIPELINE_STAGE,
    pipeline: HUBSPOT_LANDING_DEAL_PIPELINE_NAME
  }
  const SimplePublicObjectInput = { properties }
  const apiResponse = await hubspotClient.crm.deals.basicApi.create(SimplePublicObjectInput)

  await exports.associateDealToContact(apiResponse.body.id, contactId)

  return apiResponse.body.id
}

exports.associateDealToContact = async function associateDealToContact (dealId, contactId) {
  await hubspotClient.crm.deals.associationsApi.create(
    dealId,
    'contact',
    contactId,
    'deal_to_contact'
  )
}

exports.createDealNote = async function createDealNote (dealId, { body } = {}) {
  await hubspotClient.apiRequest({
    method: 'POST',
    path: '/engagements/v1/engagements',
    body: {
      engagement: { active: true, type: 'NOTE' },
      associations: { dealIds: [dealId] },
      metadata: { body },
      json: true
    }
  })
}

exports.createContactNote = async function createContactNote (contactId, { body } = {}) {
  await hubspotClient.apiRequest({
    method: 'POST',
    path: '/engagements/v1/engagements',
    body: {
      engagement: { active: true, type: 'NOTE' },
      associations: { contactIds: [contactId] },
      metadata: { body },
      json: true
    }
  })
}

exports.createMeeting = async function createMeeting ({
  contactId,
  dealId,
  startTime,
  endTime,
  title,
  description,
  internalNotes
} = {}) {
  const associations = {}

  if (contactId) associations.contactIds = [contactId]
  if (dealId) associations.dealIds = [dealId]

  await hubspotClient.apiRequest({
    method: 'POST',
    path: '/engagements/v1/engagements',
    body: {
      engagement: { active: true, type: 'MEETING' },
      associations,
      metadata: {
        body: description,
        startTime: dayjs(startTime).valueOf(),
        endTime: dayjs(endTime).valueOf(),
        title,
        internalMeetingNotes: internalNotes
      }
    }
  })
}
