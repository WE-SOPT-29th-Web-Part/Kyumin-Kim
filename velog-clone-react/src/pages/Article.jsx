import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import ArticleOptions from "../components/article/ArticleOptions";
import Header from "../components/common/Header";
import ImagWrapper from "../components/common/ImagWrapper";
import Profile from "../components/home/Profile";

const Article = () => {
  const location = useLocation();
  const article = location.state;
  const { title, body, thumbnail, date, tags } = article;
  return (
    <StyledWrapper>
      <Header />
      <StyledArticle>
        <h1>{title}</h1>
        <ArticleOptions article={article} />
        <div>
          <span>김규민 </span>
          <span>{date}</span>
        </div>
        <StyledTag>
          {tags.map((tag, idx) => (
            <span key={idx}>{tag}</span>
          ))}
        </StyledTag>
        {thumbnail && (
          <ImagWrapper ratio="50%">
            <img src={thumbnail} alt="thumbnail" />
          </ImagWrapper>
        )}
        <div>{body}</div>
      </StyledArticle>
      <Profile />
    </StyledWrapper>
  );
};

export default Article;

const StyledWrapper = styled.div``;

const StyledArticle = styled.div`
  max-width: 768px;
  width: 100%;
  margin: auto;

  & > div {
    margin-bottom: 10px;
  }
`;

const StyledTag = styled.div`
  display: flex;
  flex-wrap: wrap;
  & > span {
    font-size: 20px;
    color: green;
    background-color: #f1f3f5;
    border-radius: 15px;
    padding: 5px 10px 5px 10px;
    margin-right: 10px;
    margin-bottom: 2px;
  }
`;
