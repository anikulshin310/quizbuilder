
import React from 'react'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
const Answer = (answerText) => {
    return (

        <FormControlLabel

            control={<Checkbox color="primary" />}

            
            label={answerText.answerText}
        >

        </FormControlLabel>
    )
};
export default Answer;