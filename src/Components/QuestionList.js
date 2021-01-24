import React, { useState } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import AnswerForm from './AnswerForm';
import AnswerList from './AnswerList';





const QuestionList = ({ questions, deleteQuestions }) => (


    <List>

        {questions.map((question, index) => (
            <ListItem key={index.toString()} dense button>
                <Checkbox tabIndex={-1} disableRipple />
                <ListItemText primary={question} />
                {/* <AnswerForm>
                    <AnswerList>

                    </AnswerList>
                </AnswerForm> */}
                <ListItemSecondaryAction>

                    <IconButton
                        aria-label="Delete"
                        onClick={() => {
                            deleteQuestions(index);
                        }}
                    >
                        <DeleteIcon />
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
        ))}

    </List>
);

export default QuestionList;