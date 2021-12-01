import React from "react";
import styled from "styled-components";
import profileImg from "../../asset/imgs/qmin.JPG";

const Profile = () => {
  return (
    <StyledWrapper>
      <div>
        <img src={profileImg} alt="profileImg" />
        <aside>
          <div>Q.min</div>
          <div>29기 web</div>
        </aside>
      </div>
    </StyledWrapper>
  );
};

export default Profile;

const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;

  & > div {
    display: flex;
    margin-top: 5.6rem;
    padding-bottom: 3.6rem;
    width: 48rem;
    height: 8rem;
    border-bottom: 0.1rem solid rgb(240 240 240);
  }

  & > div > img {
    width: 8rem;
    height: 8rem;
    border-radius: 50%;
    margin-right: 1.5rem;
  }

  & > div > aside {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  & > div > aside > div {
    margin: 0.5rem 0;
  }
  & > div > aside > div:first-child {
    font-weight: 700;
    font-size: 1.5rem;
  }

  & > div > aside > div:last-child {
    font-size: 1.2rem;
  }
`;
