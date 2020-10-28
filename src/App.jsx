import React from 'react';
import './App.css';
import firebase from './Firebase';

const App=()=>{
  const db=firebase.firestore();
  const sendRequest=()=>{
    db.collection("users").add({
      first: "Ada",
      last: "Lovelace",
      born: 1815
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
  }
  return (
    <button type="button" onClick={sendRequest}>a</button>
  );
}

export default App;
