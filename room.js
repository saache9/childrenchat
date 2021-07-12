function loginout()
{
    window.location = "login.html";
}
var user = localStorage.getItem("User Name");
document.getElementById("name").innerHTML=user;


 // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyAh8okxZFHdBfjRHevH4sX4WXt8WCWZrkg",
    authDomain: "children-talk-6dcb1.firebaseapp.com",
    databaseURL: "https://children-talk-6dcb1-default-rtdb.firebaseio.com",
    projectId: "children-talk-6dcb1",
    storageBucket: "children-talk-6dcb1.appspot.com",
    messagingSenderId: "748907760942",
    appId: "1:748907760942:web:a14169b4ba746a208e3ebf",
    measurementId: "G-96HD98CX66"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  roomdetail =0;
  function addroom()
  {
    roomdetail = roomdetail + 1;   
      room_name = "#"+document.getElementById("roomname").value
      firebase.database().ref("/").child("Room Name and detail  " + roomdetail ).update({
          Roomname:room_name,
          createdby:user
      });
  }