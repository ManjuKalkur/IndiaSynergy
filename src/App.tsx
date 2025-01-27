import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import About from './components/AboutUs';
import Casting from './components/Casting';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/Products/casting" element={<Casting />} />
      </Routes>
    </Router>
  );
};

export default App;
