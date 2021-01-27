import React, { useState } from 'react';

import InputForm from './InputForm'
import Answer from './Answer';

import FormGroup from '@material-ui/core/FormGroup';
import IconButton from '@material-ui/core/IconButton'
import FormControl from '@material-ui/core/FormControl';
import DeleteIcon from '@material-ui/icons/Delete';





const AnswerList = () => {
    const [answers, setAnswers] = useState([])
    const addAnswer = (text) => setAnswers([...answers, { text }]);
    const removeAnswers = index => {
        const newAnswers = [...answers];
        newAnswers.splice(index, 1);
        setAnswers(newAnswers);
    };

    return (
        <div>
            <FormControl component="fieldset">
                <FormGroup>
                    {answers.map((answer, index) => (

                        <div key={index.toString()}>
                            <Answer answerText={answer.text} >
                            </Answer>
                            <IconButton onClick={() => removeAnswers(index)}>
                                <DeleteIcon></DeleteIcon>
                            </IconButton>
                        </div>

                    ))}

                    <InputForm  placeholder="Set answer" addFromInput={addAnswer} />
                </FormGroup>
            </FormControl>
            <button onClick={()=>{console.log(answers)}}>+</button>
        </div >
    )
};

export default AnswerList;