import React,{useState,useEffect} from 'react';
import firebase from '../Firebase';
import Button from '@material-ui/core/Button';

const Selecttime=(props)=>{
  const name=props.location.state.Representativename;
  const value=props.location.state.NumberofPeople;
  const db=firebase.firestore();
  const [First,setFirst]=useState(0);
  const [Second,setSecond]=useState(0);
  const [NumberofFirstPeople,setNumberofFirstPeople]=useState(0);
  const [NumberofSecondPeople,setNumberofSecondPeople]=useState(0);
  let firstflag=0;
  let secondflag=0;
  useEffect(()=>{
    db.collection("timetable").get().then((querySnapshot)=>{
      querySnapshot.forEach((doc)=>{
        if(doc.data().NumberofPeople+value<=15&&firstflag===0){
          setFirst(doc.id);
          firstflag+=1;
          setNumberofFirstPeople(NumberofFirstPeople+value);
        }
        else if(doc.data().NumberofPeople+value<=15&&secondflag===0){
          setSecond(doc.id);
          secondflag+=1;
          setNumberofSecondPeople(NumberofSecondPeople+value);
        }
      });
    });
  },[])
  const handleFirstClick=()=>{
    db.collection("timetable").doc(First).set({
      NumberofPeople:parseInt(NumberofFirstPeople),
      [name]:parseInt(value)
    });
    props.history.push('/Thanks');
  }
  const handleSecondClick=()=>{
    db.collection("timetable").doc(Second).set({
      NumberofPeople:parseInt(NumberofSecondPeople),
      [name]:parseInt(value)
    });
    props.history.push('/Thanks');
  }
  return(
    <div>
      <h1>お好きな時間をお選びください</h1>
      <Button
        variant="contained"
        color="primary"
        onClick={handleFirstClick}
        value={First}
      >
        {First}
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={handleSecondClick}
        value={Second}
      >
        {Second}
      </Button>
    </div>
  )
}
export default Selecttime;
