import React from 'react';
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core/styles'

const Selecttime=(props)=>{
  //CSS
  const useStyles=makeStyles((theme)=>({
    button:{
      margin:theme.spacing(1),
    },
  }));
  const classes=useStyles();
  //props
  const name=props.location.state.Representativename;
  const value=props.location.state.NumberofPeople;
  //function
  const handleChangeYes=()=>{
    props.history.push({
      pathname:'/Selecttime',
      state:{Representativename:name,NumberofPeople:value}
    })
  }
  const handleChangeNo=()=>{
    props.history.push('/');
  }
  return(
    <div>
      <h1>{name}様</h1>
      <h1>{value}名</h1>
      <h1>で間違いないですか？</h1>
      <Button
        variant="contained"
        color="primary"
        onClick={handleChangeYes}
        className={classes.button}
      >
        はい
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={handleChangeNo}
        className={classes.button}
      >
        いいえ
      </Button>
    </div>
  );
}
export default Selecttime;
