import './App.css';
import Footer from './Footer';
import Header from './Header';
import Navigation from './Navigation';
import Todolist from './Todolist';
import styled from 'styled-components';
import { useState } from 'react';

function App() {

  const[date,setDate] = useState({data: [], status:"both"});
  
  return (
    <Root>
      <Header />
      <Navigation date={date} setDate={setDate}/>
      <Todolist date={date} setDate={setDate}/>
      <Footer />
    </Root>
  );
}

export default App;

const Root = styled.div``