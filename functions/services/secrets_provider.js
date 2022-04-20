const { SecretManagerServiceClient } = require('@google-cloud/secret-manager')
const { config: getFunctionsConfig } = require('firebase-functions')
const { get } = require('lodash')

const { GCP_SECRET_ID } = require('../constants')

let secrets = {}

async function readFromSecretManager () {
  const client = new SecretManagerServiceClient()
  const [accessResponse] = await client.accessSecretVersion({
    name: `${GCP_SECRET_ID}/versions/latest`
  })

  const secretsPayload = JSON.parse(accessResponse.payload.data.toString('utf8'))

  return secretsPayload
}

function readFromConfig () {
  return getFunctionsConfig()
}

async function retrieveSecretsJSON () {
  if (!secrets) {
    // allow provide secrets via .runtimeconfig.json (docker-compose)
    secrets = process.env.FUNCTIONS_EMULATOR ? readFromConfig() : await readFromSecretManager()
  }
}

async function getSecret (pathOrName) {
  await retrieveSecretsJSON()

  return get(secrets, pathOrName, undefined)
}

exports.getSecret = getSecret
