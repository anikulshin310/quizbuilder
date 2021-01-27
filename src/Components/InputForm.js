import React, { useState } from 'react';

import { IconButton, List, ListItem, ListItemSecondaryAction, TextField } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

const QuestionForm = ({ addFromInput, id }) => {
    const [value, setValue] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        value && addFromInput(value);
        setValue("");
    };

    return (
        <div><form id={id} onSubmit={handleSubmit}>
            <List>
                <ListItem>
                    <TextField
                        fullWidth
                        variant="outlined"
                        type="text"
                        value={value}
                        placeholder="Set question"
                        onChange={e => setValue(e.target.value)}
                    >

                    </TextField>
                </ListItem>
                <ListItemSecondaryAction>
                    <IconButton id={id} type="submit">
                        <AddIcon></AddIcon>
                    </IconButton>

                </ListItemSecondaryAction>

            </List>


        </form>
        </div>
    );
}


export default QuestionForm