const hubspot = require('@hubspot/api-client')

const { HUBSPOT_API_KEY, HUBSPOT_LANDING_DEAL_PIPELINE_STAGE, HUBSPOT_LANDING_DEAL_PIPELINE_NAME } = require('../constants')

const hubspotClient = new hubspot.Client({
  apiKey: HUBSPOT_API_KEY
})

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
  const contactId = email
  const properties = []
  const associations = undefined
  const archived = true
  const idProperty = 'email'

  try {
    const response = await hubspotClient.crm.contacts.basicApi.getById(contactId, properties, associations, archived, idProperty)

    return response.body.id
  } catch (err) {
    if (err.response && err.response.statusCode === 404) {
      return exports.createContact({ name, email })
    }
  }
}

exports.getDeal = async function getDeal (dealId) {
  const apiResponse = await hubspotClient.crm.deals.basicApi.getById(dealId)

  return apiResponse.body
}

exports.createDeal = async function createDeal (contactId, { name } = {}) {
  const properties = {
    dealname: name,
    dealstage: HUBSPOT_LANDING_DEAL_PIPELINE_STAGE,
    pipeline: HUBSPOT_LANDING_DEAL_PIPELINE_NAME
  }
  const SimplePublicObjectInput = { properties }
  const apiResponse = await hubspotClient.crm.deals.basicApi.create(SimplePublicObjectInput)

  return apiResponse.body.id
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
