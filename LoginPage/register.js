const firebaseConfig = {
  apiKey: "AIzaSyBPM-Pgq6hPbzPMM248Yse_NWaK77hafEQ",
  authDomain: "nexusparty2.firebaseapp.com",
  databaseURL: "https://nexusparty2-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "nexusparty2",
  storageBucket: "nexusparty2.appspot.com",
  messagingSenderId: "519037865222",
  appId: "1:519037865222:web:a9530ef350524213dd6287",
  measurementId: "G-GJQM7VP1C4"
};


  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Initialize variables
const auth = firebase.auth()
const database = firebase.database()

// Set up our register function
function register () {
  // Get all our input fields
  email = document.getElementById('email').value
  password = document.getElementById('password').value
  username = document.getElementById('username').value
  

  // Validate input fields
  if (validate_email(email) == false || validate_password(password) == false) {
    alert('Invalid Email or Password')
    return
    // Don't continue running the code
  }

 
  // Move on with Auth
  auth.createUserWithEmailAndPassword(email, password)
  .then(function() {
    // Declare user variable
    var user = auth.currentUser

    // Add this user to Firebase Database
    var database_ref = database.ref()

    // Create User data
    var user_data = {
      email : email,
      password : password,
      username : username,
      last_login : Date.now()
    }

    // Push to Firebase Database
    database_ref.child('users/' + user.uid).set(user_data)

    // Done
    alert("Account Registered")
    window.location.href = 'login.html';
  })
  .catch(function(error) {
    // Firebase will use this to alert of its errors
    var error_code = error.code
    var error_message = error.message

    alert(error_message)
  })
}




// Validate Functions
function validate_email(email) {
  expression = /^[^@]+@\w+(\.\w+)+\w$/
  if (expression.test(email) == true) {
    // Email is good
    return true
  } else {
    // Email is not good
    return false
  }
}

function validate_password(password) {
  // Firebase only accepts lengths greater than 6
  if (password < 6) {
    return false
  } else {
    return true
  }
}



