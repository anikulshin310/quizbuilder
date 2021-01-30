import React from 'react';
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import './App.css';
import QuestionList from './Components/QuestionList';



function App() {

  return (
    <div>
      <Container maxWidth="sm">
        <Typography align="center" variant="h2" component="h2">
          Quiz Builder
</Typography>
        <QuestionList></QuestionList>

      </Container>

    </div>
  );
}

export default App;
