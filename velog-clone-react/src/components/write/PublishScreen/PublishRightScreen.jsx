import React from "react";
import styled from "styled-components";
import { StyledButton } from "../ArticleFooter";

const PublishRightScreen = ({ createArticle, setIsPublishScreen }) => {
  const handlePost = async () => {
    // await 안 해주면, 비동기 처리되지 않아 곧바로 get 반영되지 않는다.
    await createArticle();
  };
  return (
    <StyledRoot>
      <StyledButton onClick={() => setIsPublishScreen(false)}>
        취소
      </StyledButton>
      <StyledButton onClick={handlePost}>출간하기</StyledButton>
    </StyledRoot>
  );
};

export default PublishRightScreen;

const StyledRoot = styled.section`
  width: 100%;
  & > button:nth-child(1) {
    background-color: gray;
  }
  & > button + button {
    background-color: green;
    margin-left: 12px;
  }
`;