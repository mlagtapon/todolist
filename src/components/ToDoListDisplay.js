import React, { useState } from 'react';

const ToDoList = props => {
    const {tasks, setTask, delete_this, complete, this_id, done, setDone, toggleComplete} = props;

    return (

        <div classname="container">
        <li style={ complete ? {textDecoration: "line-through"} : {textDecoration: "none"} }>{tasks}</li>
        <button onClick={() => delete_this(this_id)}>Delete</button>

        <input type="checkbox" onClick={() => toggleComplete(this_id)} checked={complete} onChange={e => setDone(e.target.checked)} /> Complete
        </div>
    )
}

export default ToDoList;