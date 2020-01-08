 // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAJL-e9UTsHmHzd67msrDxri_KPPAa_490",
    authDomain: "urbanvolume-29749.firebaseapp.com",
    databaseURL: "https://urbanvolume-29749.firebaseio.com",
    projectId: "urbanvolume-29749",
    storageBucket: "urbanvolume-29749.appspot.com",
    messagingSenderId: "56365791842",
    appId: "1:56365791842:web:3ae64aa3ac489cc7d7ef3b",
    measurementId: "G-BNRWZKGLL6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  //reference messages collection
var messagesRef = firebase.database().ref('messages');

//listen for form submit
document.getElementById('contact_form').addEventListener('submit', submitForm);

//submit form
function submitForm(e){
    e.preventDefault();

 //get values
 var name= getInputVal('name');
 var email= getInputVal('email');
 var nightclub= getInputVal('nightclub');
 var number= getInputVal('number');
 var message= getInputVal('message');

 //save message
 saveMessage(name, email, nightclub, number, message);


//show alert
document.querySelector('.alert').style.display = 'block';

//hide alert after 3 seconds

setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
},3000);

  // Clear form
  document.getElementById('contact_form').reset();
}

//function to get form values

function getInputVal(id){
    return document.getElementById(id).value;

}
//save message to firebase

function saveMessage(name, email, nightclub, number, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        email: email,
        nightclub: nightclub,
        number: number,
        message: message
    });
}

//Button Scroll To Top


    
