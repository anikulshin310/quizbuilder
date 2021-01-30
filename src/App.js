import React from 'react';
import {
  Route,
  Switch,
  Redirect,
  withRouter
} from "react-router-dom";
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
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
