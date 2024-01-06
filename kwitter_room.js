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

username = localStorage.getItem("Username");

document.getElementById("usernamedis").innerHTML = "Welcome " + username;

function addRoom() {
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
          purpose: "adding room name"
    });
    localStorage.setItem("room_name", room_name);
    window.location = "kwitter_page.html";
}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
    Room_names = childKey;
//Start code
    console.log("room_name" + room_names);
    row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div> <hr>";
    document.getElementById("output").innerHTML+= row;
//End code
});});}
getData();

function redirectToRoomName() {
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}