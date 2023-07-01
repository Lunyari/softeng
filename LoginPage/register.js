const firebaseConfig = {
  apiKey: "AIzaSyC57Ph0aBB7V07w1eeuojP5NN5KSF43HKw",
  authDomain: "nexusparty.firebaseapp.com",
  databaseURL: "https://nexusparty-default-rtdb.firebaseio.com",
  projectId: "nexusparty",
  storageBucket: "nexusparty.appspot.com",
  messagingSenderId: "263956260738",
  appId: "1:263956260738:web:0ad730fe7effc588e5919b",
  measurementId: "G-F97497CMSL"
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



