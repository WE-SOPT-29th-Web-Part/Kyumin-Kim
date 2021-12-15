import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as ArrowDropDownImage } from "../../asset/icons/arrow_drop_down.svg";

const Header = () => {
  return (
    <StyledWrapper>
      <div>
        <StyledLeft>
          <div>v</div>
          <div>q-min-sopt.log</div>
        </StyledLeft>
        <StyledRight>
          <StyledLink to="/write">
            <button>새 글 작성</button>
          </StyledLink>
          <ArrowDropDownImage fill="darkgray" />
        </StyledRight>
      </div>
    </StyledWrapper>
  );
};

export default Header;

const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;

  & > div {
    width: 64rem;
    height: 4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const StyledLeft = styled.div`
  display: flex;
  font-size: 1.5rem;
  align-items: center;

  & > div:first-child {
    width: 1.75rem;
    height: 1.75rem;
    text-align: center;
    background-color: black;
    color: white;
    border-radius: 10%;
    margin-right: 1rem;
  }
`;
const StyledRight = styled.div`
  display: flex;
  align-items: center;

  & > svg:hover {
    fill: red;
  }
`;
const StyledLink = styled(Link)`
  & > button {
    background-color: white;
    font-size: 1rem;
    width: 6rem;
    height: 2rem;
    border-style: none;
    border: 0.1rem solid black;
    border-radius: 1rem;
  }
`;
