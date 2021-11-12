import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const SearchBar = ({setUserInfo}) => {
    const [user, setUser] = useState("");

    const handleChange = (e) => {
        setUser(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setUserInfo((currentUserInfo) => ({...currentUserInfo, status:"pending"}))

        try {
        const { data } = await axios.get(`http://api.github.com/users/${user}`);
        setUserInfo((currentUserInfo) => ({...currentUserInfo, data:data, status:"resolved"}));
        } catch (error) {
            setUserInfo((currentUserInfo) => ({...currentUserInfo, data:null, status:"rejected"}));
            console.log(error);
        }
        setUser("");
    }; 

    return (
        <form onSubmit={handleSubmit}>
            <Input 
                value = {user}
                onChange = {handleChange} 
                type="text" 
                placeholder="Github 프로필을 검색해보세요"/>
        </form>
    )
}

export default SearchBar;

const Input = styled.input`
    width: 320px;
    height:57px;
    padding:16px;
    color: lightcoral;
    background-color: var(--blue);
    border:none;
    outline:none;
    box-shadow: rgb(0 0 0 / 80%) 0px 0px 10px 0px;
    border-radius:20px;

`;

