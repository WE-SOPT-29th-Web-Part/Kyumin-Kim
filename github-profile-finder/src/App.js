import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import styled from "styled-components";
import Result2 from "./components/Result2";

function App() {
  const [userInfo, setUserInfo] = useState({ data: null, status: "idle" });
  // idle: 쉬고 있는, 아무 데이터도 받아오지 않은 상태.

  useEffect(() => {
    console.log(userInfo);
  }, [userInfo]);

  return (
    <Root>
      <Header />
      <SearchBar setUserInfo={setUserInfo} />
      <Result2 userInfo={userInfo} setUserInfo={setUserInfo} />
    </Root>
  );
}

export default App;

const Root = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
