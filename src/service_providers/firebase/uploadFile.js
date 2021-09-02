import { v4 as uuidv4 } from 'uuid'
import { getStorage, ref, uploadBytes } from 'firebase/storage'
import firebase from '.'

const storage = getStorage(firebase)

async function uploadFile (file) {
  const randomFileName = uuidv4()
  const storageRef = ref(storage, `raw-uploads/${randomFileName}${file.name.replace(/[^0-9a-z_\-.]/ig, '_')}`)

  try {
    const snapshot = await uploadBytes(storageRef, file)
    return snapshot.metadata.fullPath
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
