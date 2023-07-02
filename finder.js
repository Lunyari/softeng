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

const gameInput = document.querySelector('input[name ="games"]');
const ratingInput = document.querySelector('input[name="rating"]:checked')
const roleInput = document.querySelector('input[name="roles"]');

document.querySelector('form').addEventListener('submit', function(event){
    event.preventDefault();

  const selectedGame = gameInput.value;
  const selectedRating = ratingInput ? ratingInput.value : '';
  const selectedRole = roleInput.value;

  const database = firebase.database();
  const playersRef = database.ref('players');

  playersRef
  .orderByChild('game')
  .equalTo(selectedGame)
  .once('value')
  .then(snapshot => {
    
    snapshot.forEach(childSnapshot => {
      const playerData = childSnapshot.val();
      console.log(playerData);
      
    });
  })
  .catch(error => {
    console.error('Error retrieving data:', error);
  });


});