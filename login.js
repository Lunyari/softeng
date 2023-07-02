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

  function login(){
    email = document.getElementById('email').value
    password = document.getElementById('password').value

    if (validate_email(email) == false || validate_password(password) == false) {
        alert('Invalid Email or Password')
        return
        // Don't continue running the code
      }
    
      auth.signInWithEmailAndPassword(email,password)
      .then(function(){
         // Declare user variable
        var user = auth.currentUser

        // Add this user to Firebase Database
        var database_ref = database.ref()

        // Create User data
        var user_data = {
        email : email,
        password : password,
        last_login : Date.now()
    }

        // Push to Firebase Database
        database_ref.child('users/' + user.uid).update(user_data)

        // Done
        alert('Login Successful')

        window.location.href = 'home.html';

      })
      .catch(function(error){
        var error_code = error.code
        var error_message = error.message
    
        alert(error_message)

      })
  }

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