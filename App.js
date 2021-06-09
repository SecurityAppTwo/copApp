import React, { useState } from 'react';
// import Routes from './router/Routes.js'
import SignIn from './components/SignIn.js'
import { NavigationContainer } from '@react-navigation/native';
import Navbar from './navbar/Navbar.js';
import {View} from 'react-native'

const App = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  
  return (
    <View style={{height:"100%"}}>
      <NavigationContainer>
      <Navbar></Navbar>
    </NavigationContainer>
    </View>
    
    // <Routes></Routes>
  );
};

export default App;
