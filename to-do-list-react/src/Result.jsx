import React, { useState } from 'react'

const Result = () => {
    const [todo,setTodo] = useState("");

    const handleChange = () => {
        setTodo(todo);
        console.log(`todo`,todo);
    }

    return (
        <div>
            <form>
                <input 
                    id="todos" 
                    value={todo} 
                    type="text" 
                    onChange={handleChange}>
                </input>
                <button htmlFor="todos">add</button>
            </form>
        </div>
    )
}

export default Result;
