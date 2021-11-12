import React from 'react'
import styled from 'styled-components';

const Result = ({userInfo, setUserInfo}) => {
    return (
        <Root>
            <button onClick={() => setUserInfo({})}>close</button>
            <img src={userInfo.avatar_url} alt="" />
            <h3>{userInfo.name}</h3>
            <h4>{userInfo.login}</h4>
            <p>{userInfo.bio}</p>
            <a href={userInfo.html_url} target="_blank" rel="noreferrer">Visit Github</a>
            <Ul>
                <li>
                    <strong>Followers</strong>
                    {userInfo.followers}
                    </li>
                <li>
                    <strong>Following</strong>
                    {userInfo.following}
                </li>
                <li>
                    <strong>Repos</strong>
                    {userInfo.public_repos}
                </li>
            </Ul>
        </Root>
    );
};

export default Result;

const Root = styled.article`
  display:flex;
  flex-direction:column;
  color:#0F2A67;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
  background-color: #EFC6CF;
  box-shadow:rgb(0 0 0 / 80%) 0px 0px 10px 0px;
  width: 390px;
  border-radius: 20px;
  position: relative;
  animation: slideDown 400ms ease-in-out;

  @keyframes slideDown {
      0% {
        transform:translateY(-20px);
        opacity: 0;
      }

      100% {
        transform:translateY(0px);
        opacity:1;
      }
  }
  & > button {
      position: absolute;
      top: 15px;
      right: 15px;
      width: 50px;
      height: 30px;
      background-color:#EFC6CF;
      color:grey;
      outline:none;
      border:none;
      border-radius:4px;
      box-shadow:rgb(0 0 0 / 30%) 0px 0px 5px 0px;
      cursor:pointer;
  }

  & > img {
      width:200px;
      height:200px;
      border-radius:20%;
      margin-top:30px;
      box-shadow:rgb(0 0 0 / 80%) 0px 0px 10px 0px;
  }

  & > h3 {
    font-size:24px;
    margin-top:24px;
    font-weight:700; 
  }

  & > h4 {
      font-size:14px;
      margin-top:5px;
  }

  & > p {
      padding: 20px 45px;
      text-align: center;
  }

  & > a {
      text-decoration:none;
      color: chocolate;
      border: 1px solid chocolate;
      padding: 8px;
      border-radius: 4px;
      &:hover {
          background-color:lightcoral;
          color:white;
      }
  }
`;

const Ul = styled.ul`
  display:flex;
  width:100%;
  margin-top: 25px;
  & > li {
      width:130px;
      height: 59px;
      display:flex;
      flex-direction: column;
      align-items:center;
      justify-content:center;
      line-height: 1.5;
      border: 
      & > strong {
          font-weight: 700;
      }
  }
`;