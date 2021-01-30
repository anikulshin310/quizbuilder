import React, { useState } from 'react';

import { ListItem, TextField, ListItemSecondaryAction, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { Add } from '@material-ui/icons';

const QuestionForm = ({ addFromInput, placeholder }) => {
    const [value, setValue] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        value && addFromInput(value);
        setValue("");
    };

    const handleChange = e => {
        setValue(e.target.value)
    }

    return (
        <form onSubmit={handleSubmit}>

            <ListItem>
                <TextField
                    fullWidth
                    variant="outlined"
                    type="text"
                    value={value}
                    placeholder={placeholder}
                    onChange={handleChange}
                    onSubmit={handleSubmit}
                >

                </TextField>
                {/* <ListItemSecondaryAction>
                    <IconButton onClick={handleSubmit}>
                        <AddIcon></AddIcon>
                    </IconButton>
                </ListItemSecondaryAction> */}
            </ListItem>





        </form>

    );
}


export default QuestionForm