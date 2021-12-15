import React from "react";
import styled from "styled-components";

const ArticleTags = ({ tags, articleData, setArticleData }) => {
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      const tempData = { ...articleData };

      tempData.tags = [...tempData.tags, e.target.value];
      setArticleData(tempData);
      e.target.value = "";
    }
  };
  return (
    <StyledRoot>
      {tags.map((tag) => (
        <div key={tag}>{tag}</div>
      ))}
      <input
        type="text"
        onKeyPress={handleKeyPress}
        placeholder="태그를 입력하세요"
      />
    </StyledRoot>
  );
};

export default ArticleTags;

const StyledRoot = styled.div`
  display: flex;
  & > div {
    font-size: 20px;
    color: green;
    background-color: #f1f3f5;
    border-radius: 35%;
    padding: 5px 10px 5px 10px;
    margin-right: 10px;
  }
  & > input {
    outline: none;
    border: none;
    font-size: 20px;
  }
`;
