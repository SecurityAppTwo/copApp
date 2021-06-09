import React ,{ useState, useEffect } from 'react';
import { View } from 'react-native';
import RNEventSource from 'react-native-event-source'
import { NavigationContainer } from '@react-navigation/native';
import Navbar from './navbar/Navbar.js';

export default function App() {
  const [ facts, setFacts ] = useState([]);
  const [ listening, setListening ] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect( () => {
    if (!listening) {
      const events = new RNEventSource('http://police-server-securityapp2.apps.openforce.openforce.biz/events');
      events.addEventListener('message', (data) => {
        alert("i am here");
        console.log(data.type); // message
        console.log(data.data);
      });
      setListening(true);
    }
  }, [listening, facts]);



  return (
    <View style={{height:"100%"}}>
      <NavigationContainer>
      <Navbar></Navbar>
    </NavigationContainer>
    </View>
    
    // <Routes></Routes>
  );
};

