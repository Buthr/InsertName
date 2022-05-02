import './App.css';
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './Pages/Home';
import About from './Pages/About';
import Create from './Pages/Create';
import ErrorPage from './Pages/ErrorPage';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/"> Home </Link>
        <Link to="/About"> About </Link>
        <Link to="/Create"> Create </Link>
      </nav>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Create" element={<Create />} />
          <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  
  )
}

export default App;
