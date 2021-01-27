import React from 'react'
import { IconButton, List, ListItem, ListItemSecondaryAction, ListItemText } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';



const QuestionItem = (question, removeQuestions) => {
    return (


        <List>
            

                <ListItem>
                    <ListItemText primary={question}>
                    </ListItemText>
                </ListItem>
            
            <ListItemSecondaryAction>
                <IconButton onClick={() => removeQuestions(index)}>
                    <DeleteIcon></DeleteIcon>
                </IconButton>
                
            </ListItemSecondaryAction>


        </List>
    )

}

export default QuestionItem