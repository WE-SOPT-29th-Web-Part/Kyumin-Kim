import React from 'react'
import styled from 'styled-components'

const Header = () => {
    return (
        <div>
            <Title>Github Profile Finder</Title>
        </div>
    )
}

export default Header;

const Title = styled.h1`
    font-size: 32px;
    font-weight: 700;
    color: lightcoral;
    margin-bottom: 10px;
`;
