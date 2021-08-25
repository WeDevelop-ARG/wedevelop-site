const admin = require('firebase-admin')

async function initializeFirestore () {
  admin.initializeApp()

  return admin.firestore()
}

async function addDataToFirestore (data) {
  const db = await initializeFirestore()

  const res = await db.collection('curriculums').add(data)

  console.log('Added document: ', res.id)
}

exports.addDataToFirestore = addDataToFirestore
