
import React, { useState } from 'react';
import InputForm from "./InputForm";
import { Typography,Container, Divider, IconButton, List, ListItem, ListItemSecondaryAction, ListItemText } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import AnswerList from './AnswerList'

const QuestionList = () => {

    const [questions, setQuestions] = useState([]);
    const addQuestion = (text) => setQuestions([...questions, { text }]);
    const removeQuestions = index => {
        const newQuestions = [...questions];
        newQuestions.splice(index, 1);
        setQuestions(newQuestions);
    };

    return (
        <Container maxWidth="sm">
            <Typography align="center" variant="h2" component="h2">
                Quiz Builder
</Typography>

            {questions.map((question, index) => (

                <List dense key={index.toString()} >

                    <Divider></Divider>
                    <ListItem style={{ borderRadius: 10 }}>
                        <ListItemText primary={question.text}>
                        </ListItemText>
                        <ListItemSecondaryAction>
                            <IconButton onClick={() => removeQuestions(index)}>
                                <DeleteIcon></DeleteIcon>
                            </IconButton>


                        </ListItemSecondaryAction>
                    </ListItem>


                    <AnswerList question={question} ></AnswerList>




                </List>

            ))}
            <InputForm placeholder="Set question" addFromInput={addQuestion} />

        </Container>
    );
}

export default QuestionList;