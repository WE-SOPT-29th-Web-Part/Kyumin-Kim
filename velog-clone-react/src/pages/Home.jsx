import React from "react";
import Header from "../components/common/Header";
import ArticlesContainer from "../components/home/ArticlesContainer";
import HomeNav from "../components/home/HomeNav";
import Profile from "../components/home/Profile";
import styled from "styled-components";
import { Route, Routes } from "react-router-dom";
import SeriesCategory from "../components/home/SeriesCategory";

const Home = () => {
  return (
    <StyledWrapper>
      <Header />
      <StyledMain>
        <Profile />
        <HomeNav />
        <Routes>
          <Route path="/series" element={<SeriesCategory />} />
          <Route path="/" element={<ArticlesContainer />} />
        </Routes>
      </StyledMain>
    </StyledWrapper>
  );
};

export default Home;

const StyledWrapper = styled.div`
  background-color: white;
`;
const StyledMain = styled.div`
  max-width: 768px;
  width: 100%;
  margin: auto;
`;
