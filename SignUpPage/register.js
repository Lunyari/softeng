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


  //initialize firebase
  firebase.initializeApp(firebaseConfig);

  //reference database

  var nexusPartyDB = firebase.database().ref('nexusparty')

  document.getElementById('registerForm').addEventListener('submit', submitForm)

  function submitForm(e){
    e.preventDefault();

    var email = getElementVal('email');
    var username = getElementVal('username');
    var password = getElementVal('password');

    if(validateEmail(email) == false || validatePassword(password) == false){
        alert("Invalid Email or Password")
        return;
    }

    saveData(email,username,password);

    document.querySelector(".alert").style.display = "block";

    setTimeout(() => {
        document.querySelector(".alert").style.display = "none";
    }, 3000);

    document.getElementById('registerForm').reset()
  }

  function validateEmail(email){
    format = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if(format.test(email) == true){
        return true
    } else {
        return false
    }
  }

  function validatePassword(password){
    if (password < 6){
        
        return false
    } else{
        return true
    }
  }


  const saveData = (email,username,password) =>{
    var newRegisterForm = nexusPartyDB.push();

    newRegisterForm.set({
        email : email,
        username : username,
        password : password
    })
  }

  const getElementVal = (id) => {
    return document.getElementById(id).value;
  }