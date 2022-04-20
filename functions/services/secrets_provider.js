const { SecretManagerServiceClient } = require('@google-cloud/secret-manager')
const { config: getFunctionsConfig } = require('firebase-functions')
const { get, isEmpty } = require('lodash')

const { GCP_SECRET_ID, IS_LOCAL_ENVIRONMENT } = require('../constants')

let secrets = {}

async function readFromSecretManager () {
  const client = new SecretManagerServiceClient()
  const [accessResponse] = await client.accessSecretVersion({
    name: `${GCP_SECRET_ID}/versions/latest`
  })

  const secretsPayload = JSON.parse(accessResponse.payload.data.toString('utf8'))

  return secretsPayload
}

function readFromFunctionsConfig () {
  return getFunctionsConfig()
}

async function retrieveSecretsJSON () {
  if (isEmpty(secrets)) {
    secrets = IS_LOCAL_ENVIRONMENT ? readFromFunctionsConfig() : await readFromSecretManager()
  }
}

async function getSecret (pathOrName) {
  await retrieveSecretsJSON()

  return get(secrets, pathOrName, undefined)
}

exports.getSecret = getSecret
