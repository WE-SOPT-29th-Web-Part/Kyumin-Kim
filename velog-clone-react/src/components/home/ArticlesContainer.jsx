import React, { useEffect, useState } from "react";
import styled from "styled-components";
// import axios from "axios";
import { client } from "../../libs/api";
import ArticleCard from "./ArticleCard";

const ArticlesContainer = () => {
  const [articleData, setArticleData] = useState([]);

  const getArticleData = async () => {
    const { data } = await client.get("/article");
    setArticleData(data);
  };

  useEffect(() => {
    getArticleData();
  }, []);

  return (
    <StyledRoot>
      {articleData.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </StyledRoot>
  );
};

export default ArticlesContainer;

const StyledRoot = styled.div`
  display: flex;
  flex-direction: column-reverse;
`;
