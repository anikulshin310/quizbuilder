
import React, { useState } from 'react';
import InputForm from "./InputForm";
import { IconButton, List, ListItem, ListItemSecondaryAction, ListItemText } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';




const QuestionList = () => {

    const [questions, setQuestions] = useState([]);
    const [answer, setAnswer] = useState([])

    const addQuestion = (text) => setQuestions([...questions, { text }]);
    const addAnswer = (text) => setAnswer([...answer, { text }]);
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
                        <IconButton>
                            <AddIcon></AddIcon>
                        </IconButton>
                    </ListItemSecondaryAction>



                </List>
            ))}
            <InputForm id='1' addFromInput={addQuestion} />
            <InputForm id='2'addFromInput={addAnswer} />
        </div>
    );
}

export default QuestionList;