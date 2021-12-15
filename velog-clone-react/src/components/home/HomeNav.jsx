import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HomeNav = ({}) => {
  return (
    <StyledWrapper>
      <div>
        <StyledLink to="/">
          <div>글</div>
        </StyledLink>
        <StyledLink to="/series">
          <div>시리즈</div>
        </StyledLink>
      </div>
    </StyledWrapper>
  );
};

export default HomeNav;

const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;

  & > div {
    display: flex;
    margin: 8rem 0;
    font-size: 1.2rem;
  }
`;

const StyledLink = styled(Link)`
  width: 8rem;
  height: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: inherit;

  & > div {
    width: 100%;
    text-align: center;
    padding: 1rem 0;
  }
  &:focus-within div {
    color: green;
    border-bottom: 0.1rem solid green;
  }
`;
