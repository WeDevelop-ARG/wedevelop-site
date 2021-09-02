const admin = require('./firebase_admin')

function addDataToFirestore (data) {
  return admin.firestore().collection('resumes').add(data)
}

exports.addDataToFirestore = addDataToFirestore
