import React from 'react'
import styled from 'styled-components'

const Navigation = ({date,setDate}) => {
    const showToday = () => {
        setDate(() => ({
            status:"today",
        }));
    }

    const showTomorrow = () => {
        setDate(() => ({
            status:"tomorrow",
        }));
    }
    
    const showBoth = () => {
        setDate(() => ({
            status:"both",
        }));
    }

    return (
        <Root>
            <button onClick={showToday}>오늘만 보기</button>
            <button onClick={showTomorrow}>내일만 보기</button>
            <button onClick={showBoth}>모두 보기</button>
        </Root>
    )
}

export default Navigation;

const Root = styled.div`
    background-color: #C6DBE8;
    height: 50px;
    display:flex;
    justify-content: space-around;
    align-items: center;

    & > button {
        border:none;
        border-radius: 30px;
        height: 30px;
    }
`