import React, { useState, useEffect } from 'react';
import InputForm from './InputForm'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete';
import { ListItem, ListItemSecondaryAction, ListItemText } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';



const AnswerList = (question) => {
    const [answers, setAnswers] = useState([]);
    const [correctAnswers, setCorrectAnswers] = useState([]);
    /* const [quizes, setQuizes] = useState([]) */
    
    useEffect(() => {
        
        console.log(quiz)
        
    })

    const quiz = [{
        question: question.question.text,
        answers: answers,
        correctAnswers: correctAnswers,
    }]

    const addCorrectAnswer = (text) => setCorrectAnswers([...correctAnswers, text]);

    function handleChange(e) {

        if (!e.target.checked) {
            correctAnswers.indexOf(e.target.value)
            const newCorrectAnswers = [...correctAnswers];
            newCorrectAnswers.splice(correctAnswers.indexOf(e.target.value), 1);
            setCorrectAnswers(newCorrectAnswers);
        }
        else {
            addCorrectAnswer(e.target.value)
        }
    }

    const addAnswer = (text) => setAnswers([...answers, text.toString()]);

    const removeAnswers = (index, answer) => {
        const newAnswers = [...answers];
        newAnswers.splice(index, 1);
        setAnswers(newAnswers);
        const newCorrectAnswers = [...correctAnswers];
        newCorrectAnswers.splice(correctAnswers.indexOf(answer), 1);
        setCorrectAnswers(newCorrectAnswers)

    };



    return (
        <div style={{ marginLeft: 50 }}>
            {answers.map((answer, index) => (
                <ListItem divider key={index.toString()}>
                    <FormControlLabel
                        control={<Checkbox onChange={handleChange} color="primary" value={answer} />}
                    >
                    </FormControlLabel>
                    <ListItemText primary={answer}></ListItemText>
                    <ListItemSecondaryAction>
                        <IconButton onClick={() => removeAnswers(index, answer)}>
                            <DeleteIcon></DeleteIcon>
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
            ))}

            <InputForm placeholder="Set answer" addFromInput={addAnswer} />


        </div >

    )
};

export default AnswerList;