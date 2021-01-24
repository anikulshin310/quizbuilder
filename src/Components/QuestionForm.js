import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';

const QuestionForm = ({ saveQuestion }) => {
  const [value, setValue] = useState('')
  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        saveQuestion(value);
        setValue('')
    
      }}>
      <TextField
        variant="outlined"
        placeholder="Add question"
        onChange={event => {
          setValue(event.target.value);

        }}
        value={value}
      ></TextField>
    </form>

  );
};


export default QuestionForm;