import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './pages/Home.page';
import './assets/index.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route exact path="/" element={<Home/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
