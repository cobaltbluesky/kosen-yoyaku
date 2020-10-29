import React,{useState} from 'react';
const Form=(props)=>{
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
      <textarea
        value={name}
        onChange={handleNameChange}/>
      <select
        value={value}
        onChange={handleChange}
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>人
      <button type="submit" onClick={handleSubmit}>送信</button>
    </div>
  );
}
export default Form;
