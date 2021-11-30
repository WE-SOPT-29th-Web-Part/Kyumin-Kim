import React from "react";
import Header from "../components/common/Header";
import ArticlesContainer from "../components/home/ArticlesContainer";
import HomeNav from "../components/home/HomeNav";
import Profile from "../components/home/Profile";
import styled from "styled-components";
// import { Route } from "react-router-dom";
// import SeriesCategory from "./SeriesCategory";

const Home = () => {
  return (
    <StyledWrapper>
      <Header />
      {/* <StyledMain> */}
      <Profile />
      <HomeNav />
      {/* <Routes> */}
      {/* <Route path="/series" element={<SeriesCategory />} /> */}
      {/* <Route path="" element={<Home />} /> */}
      {/* </Routes> */}
      <ArticlesContainer />
      {/* </StyledMain> */}
    </StyledWrapper>
  );
};

export default Home;

const StyledWrapper = styled.div``;
// const StyledMain = styled.div``;
