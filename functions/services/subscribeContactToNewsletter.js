const { HUBSPOT_API_KEY } = require('../constants')
const http = require('https')

function subscribeContactToNewsletter ({
  emailAddress,
  subscriptionId
}) {
  const options = {
    method: 'POST',
    hostname: 'api.hubapi.com',
    port: null,
    path: `/communication-preferences/v3/subscribe?hapikey=${HUBSPOT_API_KEY}`,
    headers: {
      accept: 'application/json',
      'content-type': 'application/json'
    }
  }
  const req = http.request(options, function (res) {
    const chunks = []

    res.on('data', function (chunk) {
      chunks.push(chunk)
    })

    res.on('end', function () {
      const body = Buffer.concat(chunks)
      console.log(body.toString())
    })
  })

  req.write(JSON.stringify({
    emailAddress,
    subscriptionId
  }))
  req.end()
}

exports.subscribeContactToNewsletter = subscribeContactToNewsletter
