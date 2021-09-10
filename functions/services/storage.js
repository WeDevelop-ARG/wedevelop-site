const admin = require('./firebase_admin')

function getDownloadURLForPath (path) {
  const url = admin.storage().bucket().file(path).publicUrl().replace('storage.googleapis.com', 'storage.cloud.google.com')
  return url + '?authuser=0'
}

exports.getDownloadURLForPath = getDownloadURLForPath
