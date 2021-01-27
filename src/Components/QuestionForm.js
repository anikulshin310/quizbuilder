import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField'

const QuestionForm = ({ addQuestion }) => {
    const [value, setValue] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        value && addQuestion(value)
        setValue("");
    };

    return (
        <div><form onSubmit={handleSubmit}>
            <TextField
                variant="outlined"
                type="text"
                value={value}
                placeholder="Set question"
                onChange={e => setValue(e.target.value)}
            />
            <button type="submit"><i>set</i></button>
        </form>
        </div>
    );
}


export default QuestionForm