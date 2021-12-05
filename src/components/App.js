import React from 'react';
import { MainPage } from './pages/MainPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { BrowserRouter, Route } from 'react-router-dom';
import { Navbar } from './Navbar';

const App = () => {
  return (
    <div>
      
      <BrowserRouter>
        <div>
          <Navbar/>
          <Route path="/" exact component={MainPage}/>
          <Route path="/portfolio" exact component={PortfolioPage}/>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
