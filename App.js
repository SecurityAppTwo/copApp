import Routes from './router/Routes.js'
import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Notify , {pushNotification}from './components/notification.js';
import Loc from './components/locations.js';
import RNEventSource from 'react-native-event-source'
import Report from './components/Report.js'
import { NavigationContainer } from '@react-navigation/native';
import Navbar from './navbar/Navbar.js';
import axios from 'axios';

export default function App() {
  const [facts, setFacts] = useState([]);
  const [listening, setListening] = useState(false);

  useEffect(() => {

    if (!listening) {

      // const events = new EventSource('http://localhost:8080/events');
      const events = new RNEventSource('http://police-server-securityapp2.apps.openforce.openforce.biz/subscribe');

      // events.addEventListener( (event) => {
      //   alert("i am here")
      //   const parsedData = JSON.parse(event.data);
      //   setFacts((facts) => facts.concat(parsedData));
      // });

      events.addEventListener('message', (event) => {
        const parsedData = JSON.parse(event.data);
        if(event.data!==[]){
          const mes=`${event.data}  ${event.type}  ${event.origin}`
          alert(mes)
        }
        setFacts((facts) => facts.concat(parsedData));
        // console.log(data.type); // message
        // console.log(data.data);
      });

      // events.onmessage = (event) => {
      //   alert("message")
      //   const parsedData = JSON.parse(event.data);

      //   setFacts((facts) => facts.concat(parsedData));
      // };

      setListening(true);
    }
  }, []);



  return (
    <NavigationContainer  style={{flex: 1}}>
      <View style={styles.loading}>
      <Loc></Loc>
      </View>
      <Navbar></Navbar>
    </NavigationContainer>

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

