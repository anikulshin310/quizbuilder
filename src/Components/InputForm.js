import React, { useState } from 'react';

import { IconButton, List, ListItem, ListItemSecondaryAction, TextField } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

const QuestionForm = ({ addFromInput, placeholder }) => {
    const [value, setValue] = useState("");

    const handleSubmit = e => {

        e.preventDefault();
        value && addFromInput(value);
        setValue("");
    };

    return (
        <div><form  onSubmit={handleSubmit}>
            <List>
                <ListItem>
                    <TextField
                        fullWidth
                        variant="outlined"
                        type="text"
                        value={value}
                        placeholder={placeholder}
                        onChange={e => setValue(e.target.value)}
                    >

                    </TextField>
                </ListItem>
                <ListItemSecondaryAction>
                    <IconButton type="submit">
                        <AddIcon></AddIcon>
                    </IconButton>

                </ListItemSecondaryAction>

            </List>


        </form>
        </div>
    );
}


export default QuestionForm