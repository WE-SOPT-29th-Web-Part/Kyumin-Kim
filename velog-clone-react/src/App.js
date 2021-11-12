import './App.css';
import { BrowserRouter,Route, Link, Routes } from "react-router-dom";
import Home from './pages/Home';
import Write from './pages/Write';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="write/*" element={<Write/>} />
        <Route component={() => <div>Page Not Found</div>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
