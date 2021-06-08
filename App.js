import React from 'react';
// import Routes from './router/Routes.js'
import { NavigationContainer } from '@react-navigation/native';
import Navbar from './navbar/Navbar.js';

const App = () => {
  return (
    <NavigationContainer>
      <Navbar></Navbar>
    </NavigationContainer>
    // <Routes></Routes>
  );
};

export default App;
