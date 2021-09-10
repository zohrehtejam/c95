
var firebaseConfig = {
      apiKey: "AIzaSyCZOUrOHcEGfDUplsCQ2f2yEkxOzWxkyBE",
      authDomain: "kwitter-1a565.firebaseapp.com",
      databaseURL:"https://kwitter-1a565-default-rtdb.firebaseio.com/",
      projectId: "kwitter-1a565",
      storageBucket: "kwitter-1a565.appspot.com",
      messagingSenderId: "637272366898",
      appId: "1:637272366898:web:cf2d22373f2674a211c12b"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    
user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";


function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({

            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";

}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class= 'room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();


function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name",name);
            window.location = "kwitter_page.html";

}