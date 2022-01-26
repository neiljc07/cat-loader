import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './pages/Home.page';
import './assets/index.css';
import Cat from './pages/Cat.page';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/:id" element={<Cat/>} />
          <Route exact path="/" element={<Home/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
