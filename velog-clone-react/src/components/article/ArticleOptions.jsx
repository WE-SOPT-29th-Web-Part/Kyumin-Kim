import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { client } from "../../libs/api";

const ArticleOptions = ({ article }) => {
  const navigate = useNavigate();
  const handleArticleDelete = async () => {
    await client.delete(`article/${article.id}`);
    navigate("/");
  };

  const handleNavigateEditPage = () => {
    navigate(`/article/edit/${article.id}`, { state: article });
  };
  return (
    <StyledWrapper>
      <button>통계</button>
      <button onClick={handleNavigateEditPage}>수정</button>
      <button onClick={handleArticleDelete}>삭제</button>
    </StyledWrapper>
  );
};

export default ArticleOptions;

const StyledWrapper = styled.div`
  float: right;
  & > button {
    border: none;
    color: gray;
    background-color: white;
    font-size: 15px;
    margin-bottom: 10px;
  }
`;
