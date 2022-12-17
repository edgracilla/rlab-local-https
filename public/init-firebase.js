

var firebaseConfig = {
  apiKey: "AIzaSyDkebw2fUeNaOVwdExsECQMtfB8s-v2bK4",
  authDomain: "eureka-apps-000.firebaseapp.com",
  databaseURL: "https://eureka-apps-000.firebaseio.com",
  projectId: "eureka-apps-000",
  storageBucket: "eureka-apps-000.appspot.com",
  messagingSenderId: "897804371731",
  appId: "1:897804371731:web:f756ca081654d895f7fce6",
  measurementId: "G-6E3TKFEKT4"
}

// Initialize Firebase
const ret = firebase.initializeApp(firebaseConfig);
const provider = new firebase.auth.FacebookAuthProvider()

firebase.auth().signInWithPopup(provider).then(function(result) {
  // This gives you a Facebook Access Token. You can use it to access the Facebook API.
  var token = result.credential.accessToken;
  // The signed-in user info.
  // console.log(JSON.stringify(result.user))
  var user = JSON.parse(JSON.stringify(result.user))

  console.log(`Bearer ${user.stsTokenManager.accessToken}`)
  // console.log(`Bearer ${token}`)

}).catch(function(error) {
  console.log('--c', error)
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  // ...
})