import Routes from './router/Routes.js'
import { StatusBar } from 'expo-status-bar';
import React ,{ useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Notify from './components/notification.js';
import Loc from './components/locations.js';
import RNEventSource from 'react-native-event-source'
import Report from './components/Report.js'

export default function App() {
  const [ facts, setFacts ] = useState([]);
  const [ listening, setListening ] = useState(false);

  useEffect( () => {
    if (!listening) {
   
      // const events = new EventSource('http://localhost:8080/events');
      const events = new RNEventSource('http://localhost:8080/events');

      // events.addEventListener( (event) => {
      //   alert("i am here")
      //   const parsedData = JSON.parse(event.data);
      //   setFacts((facts) => facts.concat(parsedData));
      // });

      events.addEventListener('message', (data) => {
        alert("i am here");
        console.log(data.type); // message
        console.log(data.data);
      });

      // events.onmessage = (event) => {
      //   const parsedData = JSON.parse(event.data);

      //   setFacts((facts) => facts.concat(parsedData));
      // };

      setListening(true);
    }
  }, [listening, facts]);



  return (
    <Routes></Routes>
  );
};

