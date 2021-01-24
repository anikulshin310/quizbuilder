import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography'
import QuestionForm from './QuestionForm';
import QuestionList from './QuestionList';
/* import AnswerList from './Answers'
import AnswerForm from './AnswerForm' */
function MainField() {
    const [questions, setQuestions] = useState([]);
    const [answers, setAnswers] = useState([]); 

    return (
        <div>
            <Typography component="h1" variant="h2">
                QuestionForm
    </Typography>
            <QuestionForm saveQuestion={questionText => {
                const trimmedText = questionText.trim();
                if (trimmedText.length > 0) {
                    setQuestions([...questions, trimmedText]);
                }
            }} />
            <QuestionList questions={questions} deleteQuestions={questionIndex => {
                const newQuestions = questions.filter((_, index) => index !== questionIndex);
                setQuestions(newQuestions)
            }}>

            </QuestionList>
          {/*   <AnswerForm saveAnswer={answerText => {
                const trimmedText = answerText.trim();
                if (trimmedText.length > 0) {
                    setAnswers([...answers, trimmedText]);
                }
            }} />
            <AnswerList answers={answers} deleteAnswers={answersIndex => {
                const newAnswers = answers.filter((_, index) => index !== answersIndex);
                setAnswers(newAnswers)
            }}>

            </AnswerList> */}
        </div>
    )



}
export default MainField;