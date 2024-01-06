// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyC8Ecj2Gl_RMFf53ZDY-IndKCW8agVr0Pk",
      authDomain: "link-1950d.firebaseapp.com",
      databaseURL: "https://link-1950d-default-rtdb.europe-west1.firebasedatabase.app",
      projectId: "link-1950d",
      storageBucket: "link-1950d.appspot.com",
      messagingSenderId: "490586131339",
      appId: "1:490586131339:web:2f6dcc8c29153c5998fd8e"
    };
    
    // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
    
    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");
    
    function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: user_name, 
            message: msg, 
            like: 0
      });
    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();