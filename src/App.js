import React from 'react';
// import logo from './images/logo.svg';
import moon from './images/Moon.jpg';
import sun from './images/Sun.jpg';
import jupiter from './images/Jupiter.jpg';
import venus from './images/Venus.jpg';
import mars from './images/Mars.jpg';
import './App.css';

const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyBUekxwJk3v8V42PcLRAv3UDDDzXhdkkDU",
  authDomain: "react-iot-tester.firebaseapp.com",
  databaseURL: "https://react-iot-tester.firebaseio.com",
  projectId: "react-iot-tester",
  storageBucket: "",
  messagingSenderId: "937344065181",
  appId: "1:937344065181:web:65bdb94fca43fa29"
};

// Initialize Cloud Firestore through Firebase
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {image:mars};
  }

  // componentDidMount() {
  //   db.collection("status").doc("12345").set({
  //       room1: "sun",
  //       room2: "moon",
  //       room3: "jupiter",
  //       room4: "venus",
  //       time: Date.now()
  //   })
  //   .then(function(docRef) {
  //       console.log("Document successfully written!");
  //   })
  //   .catch(function(error) {
  //       console.error("Error adding document: ", error);
  //   });
  // }

  // componentDidMount () {
  //   var statusRef = db.collection("status");
  //     statusRef.orderBy("time","desc").limit(1).get().then((querySnapshot) => {
  //     querySnapshot.forEach((doc) => {
  //         console.log(`${doc.id} => ${doc.data()}`);
  //         console.log(`${doc.id} => ${doc.data().room1}`);
  //         var roomText1 = doc.data().room1;
  //         if (roomText1 === "sun") {
  //           this.setState({image:sun})
  //         } else if (roomText1 === "moon") {
  //           this.setState({image:moon})
  //         } else if (roomText1 === "jupiter") {
  //           this.setState({image:jupiter})
  //         } else if (roomText1 === "venus") {
  //           this.setState({image:venus})
  //         } else if (roomText1 === "mars") {
  //           this.setState({image:mars})
  //         }
  //     });
  //   });
  // }

  render() {

    db.collection("status").doc("12345")
      .onSnapshot(function(doc) {
          console.log("Current data: ", doc.data());
          console.log("Current data: ", doc.data().room1);
          var roomText1 = doc.data().room1;
          // if (roomText1 === "sun") {
          //   this.setState({image:sun});
          // } else if (roomText1 === "moon") {
          //   this.setState({image:moon});
          // } else if (roomText1 === "jupiter") {
          //   this.setState({image:jupiter});
          // } else if (roomText1 === "venus") {
          //   this.setState({image:venus});
          // } else if (roomText1 === "mars") {
          //   this.setState({image:mars});
          // }
      });

    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>Here comes the </h2>
        <img src={this.state.image} className="App-logo" alt="starWars" />
      </div>
    );
  }
}

export default App;
