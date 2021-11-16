import './App.css';
import Footer from './Footer';
import Header from './Header';
import Navigation from './Navigation';
import Todolist from './Todolist';
import styled from 'styled-components';

function App() {

  return (
    <Root>
      <Header />
      <Navigation />
      <Todolist/>
      <Footer />
    </Root>
  );
}

export default App;

const Root = styled.div``