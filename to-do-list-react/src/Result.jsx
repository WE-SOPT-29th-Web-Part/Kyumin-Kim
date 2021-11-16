import React, { useState } from 'react'
import styled from 'styled-components';

const Result = () => {
    const [todo,setToDo] = useState("");
    const [todos,setToDos] = useState([]);

    const handleChange = (e) => {
        setToDo(e.target.value);
    }

    const inputHandler = (e) => {
        e.preventDefault();
        if (todo === "" ) {
            return;
        }
        setToDos((currentArray) => [todo, ...currentArray]);
        setToDo("");
    };

    const removeHandler = (e) => {
        //여기서는 클릭한 button에 연결되는 list가 사라져야 하므로, 해당 item이 todos 배열에서 사라져야 한다.
        e.preventDefault();
        setToDos((currentArray) => {
            const removedArray = [...currentArray];
            removedArray.splice(e.target.id, 1);
            return removedArray;
        });
    }
    console.log(todos);
    return (
        <Root>
            <div>
            {todos.map((item, index) => 
            <form onSubmit={removeHandler} id={index} key={index}>
                <div>{item}</div>
                <button>X</button>
            </form>)}
            <form onSubmit={inputHandler}>
                <input  
                    value={todo} 
                    type="text" 
                    onChange={handleChange}
                    placeholder="Write Your To Do" />
                <button>Add</button>
            </form>
            </div>
        </Root>
    )
}

export default Result;

const Root = styled.div`
    display:flex;
    min-height: 20rem;
    width: 100%;
    padding: 0.5rem;

    & > div {
        width:100%;
        padding: 2rem;
        background-color: lightcoral;
        box-shadow: rgb(0 0 0/50%) 0px 0px 20px 0px;
        position:relative;
    }
    & > div > form {
        color: white;
        display: flex;
        justify-content: space-between;
        margin: 10px 0px;
    }
    & > div > form:last-child {
        width: inherit;
        position:absolute;
        bottom:0;
    }

    & > div > form > input {
        border-radius:5px;
        color: lightcoral;
        width: 20rem;
        height: 1.4rem;
        box-shadow: rgb(0 0 0/20%) 0px 0px 10px 0px;
        border:none;
    }

    & > div > form > button {
        border-radius:5px;
        background-color: white;
        color:lightcoral;
        border:none;
    }

    & > div > form:last-child > button {
        margin-right: 4rem;
    }
`;
