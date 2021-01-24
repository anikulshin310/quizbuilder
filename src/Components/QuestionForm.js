import React from 'react';
import TextField from '@material-ui/core/TextField';
const TodoForm = ({ saveQuestion }) => {
  return (
    <form>
      <TextField
        variant="outlined"
        placeholder="Add question"
        margin="normal"
      />
   </form>
  );
};


export default TodoForm;