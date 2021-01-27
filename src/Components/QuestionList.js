
import React, { useState } from 'react';
import InputForm from "./InputForm";
import { IconButton, List, ListItem, ListItemSecondaryAction, ListItemText } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

import AnswerList from './AnswerList'




const QuestionList = () => {

    const [questions, setQuestions] = useState([]);
    const addQuestion = (text, id) => setQuestions([...questions, {text} ]);

   

    const removeQuestions = index => {
        const newQuestions = [...questions];
        newQuestions.splice(index, 1);
        setQuestions(newQuestions);
    };

    return (
        <div>

            {questions.map((question, index) => (
                <List key={index.toString()} >


                    <ListItem >
                        <ListItemText primary={question.text}>
                        </ListItemText>
                    </ListItem>

                    <ListItemSecondaryAction>
                        <IconButton onClick={() => removeQuestions(index)}>
                            <DeleteIcon></DeleteIcon>
                        </IconButton>


                    </ListItemSecondaryAction>
                    <AnswerList></AnswerList>




                </List>
            ))}
            <InputForm placeholder="Set question" addFromInput={addQuestion} />
<button onClick={()=> {console.log(questions)}}></button>
        </div>
    );
}

export default QuestionList;