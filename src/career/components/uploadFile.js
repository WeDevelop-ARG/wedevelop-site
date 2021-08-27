import firebase from 'firebase/app'
import 'firebase/storage'
import { v4 as uuidv4 } from 'uuid'

async function uploadFile (file) {
  const storageRef = firebase.storage().ref('raw-uploads')
  const randomFileName = uuidv4()

  try {
    const snapshot = await storageRef.child(`${randomFileName}_${file.name}`).put(file)
    return snapshot.ref.getDownloadURL()
  } catch (err) {
    switch (err.code) {
      case 'storage/unauthorized': throw new Error('Cannot upload file due to invalid permissions.')
      case 'storage/canceled': throw new Error('Upload cancelled.')
      case 'storage/unknown':
      default:
        throw new Error(`An unknown error has occurred: ${err.message}`)
    }
  }
}

export default uploadFile