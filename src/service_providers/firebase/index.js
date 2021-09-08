import { initializeApp } from 'firebase/app'

// TODO: move config to environment variables
const firebaseConfig = {
  apiKey: 'AIzaSyCT4qBSCYd9SbXQhrmB3RbiPj2oYZL6WvY',
  authDomain: 'wedevelop-site.firebaseapp.com',
  projectId: 'wedevelop-site',
  storageBucket: 'wedevelop-site.appspot.com',
  messagingSenderId: '83924988172',
  appId: '1:83924988172:web:3f548ca8759aad2a0fd929'
}

const app = initializeApp(firebaseConfig)

export default app
