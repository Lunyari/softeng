const firebaseConfig = {
  apiKey: "AIzaSyDRkn5GW4Y8GsupHIZcJa_DZ7TDyooAsM0",
  authDomain: "nexusparr.firebaseapp.com",
  projectId: "nexusparr",
  storageBucket: "nexusparr.appspot.com",
  messagingSenderId: "959208000955",
  appId: "1:959208000955:web:71ba88ca146826901b489e",
  measurementId: "G-TSJNXT3M9N"
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
  game = document.getElementById('game').value
  role = document.getElementById('role').value
  rank = document.getElementById('rank').value
  
  

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
      game : game,
      role : role,
      rank : rank,
      last_login : Date.now()
    }
    

    // Push to Firebase Database
    database_ref.child('users/' + user.uid).set(user_data)
    
    // Done
    console.log(username,password,email,game,role,rank)
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



