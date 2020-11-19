import React from 'react';
import { BrowserRouter } from 'react-router-dom';
// routes
import Routes from './routes';
// components
import { Navbar } from './components';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes />
    </BrowserRouter>
  );
};

export default App;
