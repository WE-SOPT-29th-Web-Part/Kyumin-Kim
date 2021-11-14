import React from 'react'
import styled from 'styled-components'

const Navigation = () => {
    return (
        <Root>
            <button>오늘만 보기</button>
            <button>내일만 보기</button>
            <button>모두 보기</button>
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