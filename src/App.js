import React from 'react';
import {
  Route,
  Switch,
  Redirect,
  withRouter
} from "react-router-dom";

import './App.css';
import QuestionList from './Components/QuestionList';



function App() {

  return (
    
    <div>
      <Switch>
      <Route path='/' component={QuestionList} />
      </Switch>
    
    </div>
  );
}

export default App;
