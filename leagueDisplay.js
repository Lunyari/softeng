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

  var database = firebase.database();

  function get(){
    var user_ref = database.ref('users/' + 'League of Legends')
    user_ref.on('value', function(snapshot){
        var data = snapshot.val()
        console.log(data.username)
    })
  }
