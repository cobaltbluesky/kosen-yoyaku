import React,{useState,useEffect} from 'react';
import firebase from '../Firebase';
const Selecttime=(props)=>{
  const name=props.location.state.Representativename;
  const value=props.location.state.NumberofPeople;
  const db=firebase.firestore();
  const [First,setFirst]=useState(0);
  const [Second,setSecond]=useState(0);
  useEffect(()=>{
    db.collection("timetable").get().then((querySnapshot)=>{
      querySnapshot.forEach((doc)=>{
        if(doc.data()+value<=15&&First===0)setFirst(doc.id);
        else if(doc.data()+value<=15&&Second===0)setSecond(doc.id);
      });
    });
  },[])
  return(
    <div>
      <h1>{First}</h1>
      <h1>{Second}</h1>
    </div>
  )
}
export default Selecttime;
