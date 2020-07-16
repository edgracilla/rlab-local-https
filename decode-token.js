const firebase = require('firebase-admin')
const firebaseConfig = require('./config/firebase.json')

firebase.initializeApp({
  credential: firebase.credential.cert(firebaseConfig)
})

async function run () {
  const accessToken = ''
  const token = await firebase.auth().verifyIdToken(accessToken)

  console.log(token)
}

run()