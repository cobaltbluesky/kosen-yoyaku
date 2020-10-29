import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Form from './Form';
import Confirm from './Confirm';
import Selecttime from './Selecttime';

const App=()=>{
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Form}/>
        <Route exact path='/Confirm' component={Confirm}/>
        <Route exact path='/Selecttime' component={Selecttime}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App;
