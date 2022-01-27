import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { Alert } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import Home from './pages/Home.page';
import './assets/index.css';
import Cat from './pages/Cat.page';

function App() {
  const errorMessage = useSelector((state) => state.errorMessage);

  return (
    <Router>
      <div className="app">
        {errorMessage &&
          <div className="container">
            <div className="row">
              <div className="col">
                <Alert variant="danger">
                  { errorMessage }
                </Alert>
              </div>  
            </div>
          </div>
        }

        <Routes>
          <Route path="/:id" element={<Cat/>} />
          <Route exact path="/" element={<Home/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
