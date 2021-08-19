import { useState } from 'react'
import firebase from 'firebase/app'
import 'firebase/storage'
import { v4 as uuidv4 } from 'uuid'

function uploadFiles ({ file }) {
  const [message, setMessage] = useState('')
  const storageRef = firebase.storage().ref()
  const metadata = {
    contentType: 'application/pdf'
  }
  const randomFileName = uuidv4()
  const uploadTask = storageRef.child(randomFileName + file.name).put(file, metadata)

  uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
    (error) => {
      switch (error.code) {
        case 'storage/unauthorized':
          setMessage('User doesn`t have permission to access the object.')
          break
        case 'storage/canceled':
          setMessage('User canceled the upload.')
          break
        case 'storage/unknown':
          setMessage(`Unknown error occurred: ${error.message}`)
          break
      }
    },
    () => {
      setMessage('Upload completed successfully.')
    }
  )
  return message
}

export default uploadFiles
