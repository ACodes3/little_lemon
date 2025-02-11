import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AboutPage from './Pages/AboutPage';
import ContactPage from './Pages/ContactPage';
import HomePage from './Pages/HomePage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;