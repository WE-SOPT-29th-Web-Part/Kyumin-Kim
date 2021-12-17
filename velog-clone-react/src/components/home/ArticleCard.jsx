import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ImagWrapper from "../common/ImagWrapper";

const ArticleCard = ({ article }) => {
  console.log("article", article);

  const { title, tags, thumbnail, date, body } = article;
  return (
    <StyledWrapper>
      <div>
        <Link to={`article/${article.id}`} state={article}>
          {thumbnail && (
            <ImagWrapper ratio="56%">
              <img src={thumbnail} alt="" />
            </ImagWrapper>
          )}
          <h3>{title}</h3>
        </Link>

        <h4>{body}</h4>
        <Tags>
          {tags.map((tag) => (
            <div key={tag}>{tag}</div>
          ))}
        </Tags>
        <div>{date}</div>
      </div>
    </StyledWrapper>
  );
};

export default ArticleCard;

const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 10rem;

  & > div {
    width: 48rem;
  }

  & > div > img {
    width: 100%;
    height: auto;
  }
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 1rem;

  & > div {
    padding: 0.4rem 0.7rem;
    border-radius: 0.7rem;
    background-color: #f8f9fa;
    color: green;
    margin-right: 1rem;
    margin-bottom: 0.5rem;
  }
`;
