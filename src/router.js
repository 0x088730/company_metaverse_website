import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';

import HomeContainer from './components/views/HomePage';

const RouterComponent = () => (
  <Router>
    <div className="app">
      <Header />
      <main>
        <div>
          <Routes>
            <Route path="/" element={<HomeContainer />} />
          </Routes>
        </div>
      </main>
      {/* <Footer /> */}
    </div>
  </Router>
);
export default RouterComponent;