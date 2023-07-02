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

  function displayUserData() {
    // Retrieve user data from Firebase
    var usersRef = database.ref('users/' + 'League of Legends');
    usersRef.once('value').then(function(snapshot) {
      var userData = snapshot.val();
  
      // Update user container 1
      var userContainer1 = document.getElementById('userContainer1');
      userContainer1.querySelector('.username').textContent = userData.user1.username;
      userContainer1.querySelector('.rank').textContent = userData.user1.rank;
      userContainer1.querySelector('.role').textContent = userData.user1.role;
  
      // Update user container 2
      var userContainer2 = document.getElementById('userContainer2');
      userContainer2.querySelector('.username').textContent = userData.user2.username;
      userContainer2.querySelector('.rank').textContent = userData.user2.rank;
      userContainer2.querySelector('.role').textContent = userData.user2.role;
  
      // Update user container 3
      var userContainer3 = document.getElementById('userContainer3');
      userContainer3.querySelector('.username').textContent = userData.user3.username;
      userContainer3.querySelector('.rank').textContent = userData.user3.rank;
      userContainer3.querySelector('.role').textContent = userData.user3.role;
    });
  }

// Call the function to display user data
displayUserData();

