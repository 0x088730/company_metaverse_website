import './index.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import HomeContainer from './components/views/HomePage';
import Dashboard from './components/views/Dashboard'

const RouterComponent = () => (
  <Router>
    <div className="app">
      <Header />
      <main>
        <div>
          <Routes>
            <Route path="/" element={<HomeContainer />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>
      </main>
      {/* <Footer /> */}
    </div>
  </Router>
);
export default RouterComponent;