import React from "react";

const ArticleTitle = ({ setArticleData }) => {
  const handleChange = (e) => {
    setArticleData((articleData) => ({
      ...articleData, // 각각의 프로퍼티를 스프레드 연산자로 풀어줌.
      title: e.target.value,
    }));
  };
  return (
    <textarea
      placeholder="제목을 입력해주세요."
      onChange={handleChange}
    ></textarea>
  );
};

export default ArticleTitle;
