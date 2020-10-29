import React from 'react';
const Selecttime=(props)=>{
  const name=props.location.state.Representativename;
  const value=props.location.state.NumberofPeople;
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
      <input type="button" value="はい" onClick={handleChangeYes}></input>
      <input type="button" value="いいえ"onClick={handleChangeNo}></input>
    </div>
  );
}
export default Selecttime;
