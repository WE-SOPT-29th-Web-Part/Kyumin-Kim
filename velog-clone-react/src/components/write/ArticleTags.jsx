import React from "react";
import styled from "styled-components";

const ArticleTags = ({
  tags,
  articleData,
  onArrDataChange,
  onArrDataRemove,
}) => {
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      onArrDataChange("tags", e.target.value);
      e.target.value = "";
    }
  };
  return (
    <StyledRoot>
      {tags.map((tag, idx) => (
        <div key={idx} onClick={(e) => onArrDataRemove("tags", tag)}>
          {tag}
        </div>
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
  flex-wrap: wrap;
  & > div {
    font-size: 20px;
    color: green;
    background-color: #f1f3f5;
    border-radius: 15px;
    padding: 5px 10px 5px 10px;
    margin-right: 10px;
    margin-bottom: 2px;
  }
  & > input {
    outline: none;
    border: none;
    font-size: 20px;
  }
`;
