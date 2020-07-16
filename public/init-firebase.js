

var firebaseConfig = {
}

// Initialize Firebase
var ret = firebase.initializeApp(firebaseConfig);

console.log('--a', ret.name)

const provider = new firebase.auth.FacebookAuthProvider()

// --
firebase.auth().signInWithPopup(provider).then(function(result) {
  // This gives you a Facebook Access Token. You can use it to access the Facebook API.
  var token = result.credential.accessToken;
  // The signed-in user info.
  var user = result.user;

  console.log('--b', JSON.stringify(user))
  // ...
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

console.log('--d')
// --