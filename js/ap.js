// Initialize Firebase (ADD YOUR OWN DATA)
var config = {
    apiKey: "AIzaSyAz4SqoSYjQ3ySbhaKQMuZm3y0Q3ZWmKQs",
    authDomain: "personalblog-3002c.firebaseapp.com",
    databaseURL: "https://personalblog-3002c.firebaseio.com",
    projectId: "personalblog-3002c",
    storageBucket: "personalblog-3002c.appspot.com",
    messagingSenderId: "464778161524",
    appId: "1:464778161524:web:d1de89376428f14b081021",
    measurementId: "G-ETYV8CZ7E6"
  };
  firebase.initializeApp(config);
  
  // Reference messages collection
  var messagesRef = firebase.database().ref('messages');
  
  // Listen for form submit
  document.getElementById('contactForm').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e) {
    e.preventDefault();
  
    //email veri
  
    // Get values
    var name = getInputVal('name');
  
    var email = getInputVal('email');
  
    var message = getInputVal('message');
  
    function ValidateEmail(email) {
  
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(contactForm.email.value)) {
        console.log('Success');
        // Save message
        saveMessage(name, email, message);
  
        // Show alert
        document.querySelector('.alert-success').style.display = 'block';
  
        // Hide alert after 3 seconds
        setTimeout(function () {
          document.querySelector('.alert-success').style.display = 'none';
        }, 3000);
  
        // Clear form
        document.getElementById('contactForm').reset();
      }
      else {
        console.log('Else Success');
        document.querySelector('.alert-email-failure').style.display = 'block';
        setTimeout(function () {
          document.querySelector('.alert-email-failure').style.display = 'none';
        }, 3000);
        return false;
      }
    }
  
  
    if (name.length == 0 || email.length == 0 || message.length == 0) {
      document.querySelector('.alert-failure').style.display = 'block';
      setTimeout(function () {
        document.querySelector('.alert-failure').style.display = 'none';
      }, 3000);
  
      console.log('first if success');
    }
    else if (email != null) {
  
      ValidateEmail(email);
      console.log('else if success');
  
    }
  
  
  }
  
  // Function to get get form values
  function getInputVal(id) {
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(name, email, message) {
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      email: email,
      message: message
    });
  }