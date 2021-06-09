import React from 'react';
// import Routes from './router/Routes.js'
import SignIn from './components/SignIn.js'
import { NavigationContainer } from '@react-navigation/native';
import Navbar from './navbar/Navbar.js';

const App = () => {
  var screenSwitcher = (isValid) => {
    if (isValid){
      return '<SignIn {isValid: false}></SignIn>'
    } else{
      `<NavigationContainer>
      <Navbar></Navbar>
    </NavigationContainer>`
    }
  }
  return (
    <SignIn></SignIn>
    // <Routes></Routes>
  );
};

export default App;
