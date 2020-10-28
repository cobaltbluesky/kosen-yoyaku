import React,{useState} from 'react';
import './App.css';
import firebase from './Firebase';

const App=()=>{
  //db
  const db=firebase.firestore();
  //state
  const [numberofPeople,setNumberofPeople]=useState(0);
  const [name,setName]=useState("名無し");
  const handleNameChange=(e)=>{
    setName(e.target.value);
  }
  const handleChange=(e)=>{
    setNumberofPeople(e.target.value);
  }
  const onSubmit=()=>{
    db.collection("timetable").add({
      name:name,
      numofpeople:numberofPeople
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
  }

  return (
    <form onSubmit={onSubmit}>
      代表者氏名を入力してください:
      <textarea
        value={name}
        onChange={handleNameChange}/>
      <select
        value={numberofPeople}
        onChange={handleChange}
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>人
      <button type="submit">送信</button>
    </form>
  );
}

export default App;
