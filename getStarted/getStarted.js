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

function saveProfile(game) {
    const IGN = document.getElementById("IGN").value;
    const rank = document.getElementById("rank").value;
    const role = document.getElementById("roles").value;
  
    const profile = {
      IGN: IGN,
      rank: rank,
      role: role,
    };
  
    const databaseRef = firebase.database().ref(`profiles/${game}`);
    databaseRef.once("value", (snapshot) => {
      if (snapshot.exists()) {
        // Profile already exists
        const confirmEdit = confirm(
          "You already have a profile for this game. Do you want to edit it?"
        );
        if (confirmEdit) {
          databaseRef.update(profile)
            .then(() => {
              alert("Profile updated successfully!");
              // Redirect the user to the editing phase of the profile
              window.location.href = `${game}-edit.html`;
            })
            .catch((error) => {
              console.error("Error updating profile:", error);
            });
        } else {
          // Redirect the user back to the image buttons
          window.location.href = "index.html";
        }
      } else {
        // Profile doesn't exist, create a new one
        databaseRef.set(profile)
          .then(() => {
            alert("Profile saved successfully!");
            // Redirect the user to the image buttons
            window.location.href = "index.html";
          })
          .catch((error) => {
            console.error("Error saving profile:", error);
          });
      }
    });
  }
  
  // Function to handle the "Save" button click event
  function getStarted() {
    const game = window.location.pathname.split("/").pop().split(".")[0];
    saveProfile(game);
  }

  function redirectToGame(game) {
    // Check if the user already has a profile for the selected game
    const userRef = firebase.database().ref(`users/${userId}`);
    userRef.child(game).once("value", (snapshot) => {
      const profile = snapshot.val();
      if (profile) {
        // If the profile exists, ask the user if they want to edit it
        const shouldEdit = confirm("You already have a profile for this game. Do you want to edit it?");
        if (shouldEdit) {
          // Redirect to the edit profile page for the selected game
          window.location.href = `${game}.html?edit=true`;
        }
      } else {
        // Redirect to the create profile page for the selected game
        window.location.href = `${game}.html`;
      }
    });
  }
  
  // Handle button clicks for game selection
  const leagueButton = document.getElementById("leagueButton");
  leagueButton.addEventListener("click", () => {
    redirectToGame("league");
  });
  
  const valorantButton = document.getElementById("valorantButton");
  valorantButton.addEventListener("click", () => {
    redirectToGame("valorant");
  });
  
  const csgoButton = document.getElementById("csgoButton");
  csgoButton.addEventListener("click", () => {
    redirectToGame("csgo");
  });