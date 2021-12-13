import React from 'react';
import { MainPage } from './pages/MainPage';
import { PortfolioPage } from './pages/PortfolioPage';
import ContactPage from './pages/ContactPage';
import { BrowserRouter, Route } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

import '../styles/App.scss';

const App = () => {
  return (
    <div className="page-container">
      <div className="content-wrap">
        <BrowserRouter>
          <div>
            <Navbar />
            <Route path="/" exact component={MainPage} />
            <Route path="/portfolio" exact component={PortfolioPage} />
            <Route path="/contact" exact component={ContactPage} />
            
          </div>
        </BrowserRouter>
      </div>
      <Footer />
    </div>
  );
};

export default App;
