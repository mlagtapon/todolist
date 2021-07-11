import React, { useState } from 'react';

const ToDoList = props => {
    const {inputs, addTask, handleForm} = props;

    return (
        <form onSubmit={addTask}>
            <h2>Add a task:</h2>
            <label>Task:</label>
            <input type="text" name="tasks" value={inputs.tasks} onChange={handleForm}/>
            <button type="submit">Add</button>
        </form>
    )
}

export default ToDoList;