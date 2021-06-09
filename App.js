import Routes from './router/Routes.js'
import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Notify , {pushNotification}from './components/notification.js';
import Loc,{notify} from './components/locations.js';
import RNEventSource from 'react-native-event-source'
import { NavigationContainer } from '@react-navigation/native';
import Navbar from './navbar/Navbar.js';
import axios from 'axios';
import { getDistance } from 'geolib';

export default function App() {
  const [facts, setFacts] = useState([]);
  const [listening, setListening] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {

    const events = new RNEventSource('http://police-server-securityapp2.apps.openforce.openforce.biz/reports/subscribe');

    events.addEventListener('message', (event) => {
      const parsedData = JSON.parse(event.data);
      if(event.data!=='[]'){
        let data=event.data;
        // alert(event.data)
        notify(data);
      }
      setFacts((facts) => facts.concat(parsedData));
      // console.log(data.type); // message
      // console.log(data.data);
    });
  }, []);



  return (
    <View style={{height:"100%"}}>
      <NavigationContainer>
      <Navbar></Navbar>
    </NavigationContainer>
    </View>
    
    // <Routes></Routes>
  );
};

const styles = StyleSheet.create({
  loading: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

