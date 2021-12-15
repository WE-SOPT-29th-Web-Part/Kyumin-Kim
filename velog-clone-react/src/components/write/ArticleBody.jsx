import React from "react";
import styled from "styled-components";

const ArticleBody = ({ setArticleData }) => {
  const handleChange = (e) => {
    setArticleData((articleData) => ({
      ...articleData,
      body: e.target.value,
    }));
  };
  return (
    <StyledRoot>
      <textarea
        onChange={handleChange}
        placeholder="당신의 이야기를 적어보세요..."
      />
    </StyledRoot>
  );
};

export default ArticleBody;

const StyledRoot = styled.div`
  & > textarea {
    width: 100%;
    min-height: 500px;
    font-size: 15px;
  }
`;
