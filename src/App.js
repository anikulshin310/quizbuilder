import React from 'react';
import Container from '@material-ui/core/Container'

import './App.css';

import QuestionList from './Components/QuestionList';



function App() {

  return (
    <div>
      <Container maxWidth="md">
        <QuestionList></QuestionList>

      </Container>

    </div>
  );
}

export default App;
