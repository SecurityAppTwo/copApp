import React, { useState, useEffect } from 'react';
import { Platform, Text, View, StyleSheet, ActivityIndicator } from 'react-native';
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import { pushNotification } from './notification.js';
import { getDistance } from 'geolib';

let loc=null;

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

  let text = "";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    loc=location;
  }


  return (
    <View style={styles.container}>
      <ActivityIndicator animating={text} color='green' size="large" />
    </View>
  );
}


export async function notify(data){
  let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          setErrorMsg('Permission to access location was denied');
          return;
        }

    let location = await Location.getCurrentPositionAsync({})
    const d=JSON.parse(data);
          if(getDistance(
          { latitude: Number(location.coords.latitude), longitude: Number(location.coords.longitude) },
          { latitude: Number(d.lat), longitude:Number(d.lon)})<= 2000){
            pushNotification(d);
        }
// alert(data["lon"]);

};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    // padding: 20,
  },
  loading: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  },
  paragraph: {
    fontSize: 18,
    textAlign: 'center',
  },
});
