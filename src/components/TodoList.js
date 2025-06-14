import React, { useState } from "react";

const TodoList = () => {
    const [tasks, setTasks]= useState([]);
    const addTask = ()=>{
        const task = `Task ${tasks.length+1}`;
        setTasks([...tasks, task])
    }

    return(
        <>
            <button onClick={addTask}>Add Task</button>
            <ul>
                {
                    tasks.map((task,index)=>(
                        <li key={index}>{task}</li>
                    ))
                }
            </ul>
        </>
    )
}

export default TodoList