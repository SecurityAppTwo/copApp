import React, { useState, useEffect } from 'react';
import { Platform, Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import {pushNotification} from './notification.js';
import { getBoundsOfDistance } from 'geolib';

export default function Loc() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS === 'android' && !Constants.isDevice) {
        setErrorMsg(
          'Oops, this will not work on Snack in an Android emulator. Try it on your device!'
        );
        return;
      }
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text = 'Waiting..';
  let crad='';
  let nearCrad='';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
      text="";
      let circle=getBoundsOfDistance(
        { latitude: Number(location.latitude), longitude: Number(location.longitude) },
       1000
    );
    //   crad=JSON.stringify(location);
    //   nearCrad=JSON.stringify(location);
    // // nearCrad='1';
    //   if(crad===nearCrad){
    //     pushNotification(crad);
      // }
  }

  return (
    <View >
      <Text style={styles.paragraph}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  paragraph: {
    fontSize: 18,
    textAlign: 'center',
  },
});
