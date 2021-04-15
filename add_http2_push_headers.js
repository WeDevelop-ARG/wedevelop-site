const fs = require('fs')
const firebaseJSON = require('./firebase.json')
const http2PushManifest = require('./build/http2-push-manifest.json')

const { hosting } = firebaseJSON

if (Array.isArray(hosting)) {
  hosting.forEach(processHostingConfig)
} else {
  processHostingConfig(hosting)
}

fs.writeFileSync(
  'firebase.json',
  JSON.stringify(firebaseJSON, null, 2)
)

function processHostingConfig (hostingConfig) {
  if (!Array.isArray(hostingConfig.headers)) {
    hostingConfig.headers = []
  }

  hostingConfig.headers = [
    ...hostingConfig.headers,
    ...http2PushManifest
  ]
}
