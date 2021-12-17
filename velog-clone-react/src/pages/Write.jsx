import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import ArticleBody from "../components/write/ArticleBody";
// import ArticleFooter from "../components/write/ArticleFooter";
import ArticleTags from "../components/write/ArticleTags";
import ArticleTitle from "../components/write/ArticleTitle";
import { client, imageClient } from "../libs/api";

const Write = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const article = location.state;
  console.log(article);
  // const [isPublishScreen, setIsPublishScreen] = useState(false);
  const [files, setFiles] = useState("");
  useEffect(() => {
    preview();
    return () => preview();
  });
  const [articleData, setArticleData] = useState(
    article ?? {
      title: "",
      body: "",
      summary: "",
      tags: [],
      thumbnail: "",
    }
  );

  const createArticle = async () => {
    if (article) {
      await client.patch(`article/${article.id}`, articleData);
      navigate(`/article/${article.id}`, { state: articleData });
      return;
    }
    await client.post("/article", articleData);
    navigate("/");
  };

  const handlePost = async () => {
    await createArticle();
  };

  const handleDataChange = (key, value) => {
    const tempArticleData = { ...articleData };
    tempArticleData[key] = value;
    setArticleData(tempArticleData);
  };

  const handleArrDataChange = (key, value) => {
    const tempArticleData = { ...articleData };
    tempArticleData[key] = [...tempArticleData[key], value];
    setArticleData(tempArticleData);
  };

  const handleArrDataRemove = (key, value) => {
    const tempArticleData = { ...articleData };
    tempArticleData[key] = tempArticleData[key].filter((el) => el !== value);
    setArticleData(tempArticleData);
  };

  const handleImageChange = async (e) => {
    const formData = new FormData();
    const imageFile = e.target.files[0];
    console.log(imageFile);
    formData.append("file", imageFile);
    const imageResponse = await imageClient.post("", formData);
    console.log(imageResponse);
    const imageUrl = imageResponse.data.url;
    handleDataChange("thumbnail", imageUrl);

    const file = e.target.files;
    setFiles(file);
  };

  const preview = () => {
    if (!files) return false;

    const imgEl = document.querySelector(".img_box");

    const reader = new FileReader();

    reader.onload = () =>
      (imgEl.style.backgroundImage = `url(${reader.result})`);
    reader.readAsDataURL(files[0]);
    console.log(reader);
  };
  return (
    <StyledRoot>
      <StyledWrapper>
        <ArticleTitle
          title={articleData.title}
          onDataChange={handleDataChange}
        />
        <StyledMidLine />
        <ArticleTags
          tags={articleData.tags}
          articleData={articleData}
          // setArticleData={setArticleData}
          onArrDataChange={handleArrDataChange}
          onArrDataRemove={handleArrDataRemove}
          // onDataChange={handleDataChange}
        />

        <ArticleBody
          // setArticleData={setArticleData}
          body={articleData.body}
          onDataChange={handleDataChange}
        />
        {/* <ArticleFooter /> */}
        <StyledPublish>
          <input type="file" onChange={handleImageChange}></input>

          <button onClick={handlePost}>출간하기</button>
          <div className="img_box"></div>
        </StyledPublish>
      </StyledWrapper>
    </StyledRoot>
  );
};

export default Write;

const StyledRoot = styled.div`
  display: flex;
  width: 50%;
  flex-direction: column;
  height: 100%;
`;

const StyledWrapper = styled.div`
  padding: 32px 48px 0 48px;
`;

const StyledMidLine = styled.div`
  width: 64px;
  height: 6px;
  background-color: black;
  margin: 24px 0;
`;

const StyledPublish = styled.div`
  .img_box {
    width: auto;
    height: 300px;
  }
`;
