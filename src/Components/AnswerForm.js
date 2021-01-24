import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';

const AnswerForm = ({ saveAnswer }) => {
    const [value, setValue] = useState('');
    
    return (
        <form
            onSubmit={event => {
                event.preventDefault();
                saveAnswer(value);
                setValue('')

            }}>
            <TextField 
                variant="standard"
                placeholder="Add answer"
                onChange={event => {
                    setValue(event.target.value);

                }}
                value={value}
            ></TextField>
        </form>

    );
};


export default AnswerForm;