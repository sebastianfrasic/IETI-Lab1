import React from 'react';

const Todo = (props) => {
    return (
        <div>
            <h2>{props.text}</h2>
            <p>Priority: {props.priority}</p>
            <p>Due Date: {props.dueDate.toString()}</p>
        </div>
    );
}

export default Todo;