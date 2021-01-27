
import React, { useState } from 'react';
import QuestionForm from "./QuestionForm";
import { IconButton, List, ListItem, ListItemSecondaryAction, ListItemText } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

const QuestionList = () => {

    const [questions, setQuestions] = useState([]);

    const addQuestion = text => setQuestions([...questions, { text }]);

    const toggleQuestions = index => {
        const newQuestions = [...questions];
        newQuestions[index].isCompleted = !newQuestions[index].isCompleted;
        setQuestions(newQuestions);
    };

    const removeQuestions = index => {
        const newQuestions = [...questions];
        newQuestions.splice(index, 1);
        setQuestions(newQuestions);
    };

    return (
        <div>
            {questions.map((question, index) => (
                <List>
                    <span onClick={() => toggleQuestions(index)}>

                        <ListItem key={index.toString()}>
                            <ListItemText primary={question.text}>
                            </ListItemText>
                        </ListItem>
                    </span>
                    <ListItemSecondaryAction>
                        <IconButton onClick={() => removeQuestions(index)}>
                            <DeleteIcon></DeleteIcon>
                        </IconButton>
                    </ListItemSecondaryAction>


                </List>
            ))}
            <QuestionForm addQuestion={addQuestion} />
        </div>
    );
}

export default QuestionList;