import React,{useState} from 'react';
import Button from '@material-ui/core/Button';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import {makeStyles} from '@material-ui/core/styles'

const Form=(props)=>{
  //CSS
  const useStyles=makeStyles((theme)=>({
    button:{
      margin:theme.spacing(1),
    },
  }));
  const classes=useStyles();
  //state
  const [value,setValue]=useState(1);
  const [name,setName]=useState("");
  const handleNameChange=(e)=>{
    setName(e.target.value);
  }
  const handleChange=(e)=>{
    setValue(e.target.value);
  }
  const handleSubmit=()=>{
    console.log(value);
    console.log(name);
    props.history.push({
      pathname:'/Confirm',
      state:{Representativename:name,NumberofPeople:value}
    });
  }

  return (
    <div>
      代表者氏名を入力してください:
      <TextareaAutosize
        value={name}
        onChange={handleNameChange}/>
      <br/>
      人数を入力してください:
      <Select
        value={value}
        onChange={handleChange}
      >
        <MenuItem value={1}>1</MenuItem>
        <MenuItem value={2}>2</MenuItem>
        <MenuItem value={3}>3</MenuItem>
        <MenuItem value={4}>4</MenuItem>
        <MenuItem value={5}>5</MenuItem>
      </Select>人
      <br/>
      <Button
        variant="contained"
        color="primary"
        onClick={handleSubmit}
        className={classes.button}
      >
        送信
      </Button>
    </div>
  );
}
export default Form;
