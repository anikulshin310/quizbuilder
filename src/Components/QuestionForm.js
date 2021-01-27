import React, { useState } from 'react';

import { IconButton, List, ListItem, ListItemSecondaryAction, TextField } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

const QuestionForm = ({ addQuestion }) => {
    const [value, setValue] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        value && addQuestion(value)
        setValue("");
    };

    return (
        <div><form onSubmit={handleSubmit}>
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