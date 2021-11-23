import React from 'react'
import styled from 'styled-components';

const Header = () => {
    return (
        <Root>
            요란도란 웹파트 ToDoList
        </Root>
    )
}

export default Header;

const Root = styled.div`
    color: white;
    font-weight: 700;
    font-size: 30px;
    text-align: center;
    line-height: 3;
    background-color: #C7CAF7;
    height: 100px;
`;