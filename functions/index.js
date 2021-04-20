const functions = require('firebase-functions')
const axios = require('axios')
const mailchimp = require('@mailchimp/mailchimp_marketing')

exports.processCalendlyEventInvitee = functions.https.onRequest(async (request, resp) => {
  const { calendlyInviteeURI } = request.body
  const token = 'eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2F1dGguY2FsZW5kbHkuY29tIiwiaWF0IjoxNjE4NjA3MDM3LCJqdGkiOiIxZjliMjRjOC03NGEwLTRlNzMtOGMxMy0xMGI0MjNlYmI2NjQiLCJ1c2VyX3V1aWQiOiJHR0hBUVVBQzNONUxUUlgyIiwib3JnX3V1aWQiOiJESENIVVJEQTZZWEJRUzZMIn0.UxvkeOZGkCiq_9RE6bU2PV-mD0keGKE7rwuvOZ2SZLY'
  const listId = 'bfb4a12429'

  resp.set('Access-Control-Allow-Origin', '*')
  if (request.method === 'OPTIONS') {
    resp.set('Access-Control-Allow-Methods', 'POST')
    resp.set('Access-Control-Allow-Headers', 'Content-Type')
    resp.set('Access-Control-Max-Age', '3600')
    resp.status(204).send('')
    return undefined
  }

  mailchimp.setConfig({
    apiKey: '9ab820bcffa760d9f787083c910ddf6e-us1',
    server: 'us1'
  })

  if (calendlyInviteeURI.startsWith('https://api.calendly.com/')) {
    const info = await getUser()
    const subscribingUser = {
      firstName: info.body.name,
      lastName: '',
      email: info.body.email
    }
    addsubscribingUser(listId, subscribingUser)
  } else {
    throw new Error('401 Unauthorized')
  }

  function getUser () {
    return new Promise((resolve, reject) => {
      axios.get(calendlyInviteeURI, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
        .then((response) => {
          return resolve(response)
        })
        .catch(e => console.log(e))
    })
  }

  async function addsubscribingUser (listId, subscribingUser) {
    const response = await mailchimp.lists.addListMember(listId, {
      email_address: subscribingUser.email,
      status: 'subscribed',
      merge_fields: {
        FNAME: subscribingUser.firstName,
        LNAME: subscribingUser.lastName
      }
    })
    console.log(
      `Successfully added contact as an audience member. The contact's id is ${
        response.id
      }.`
    )
  }
})
