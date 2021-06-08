import React from 'react';
import { StyleSheet,Image, View} from 'react-native';

import mapImg from '../assets/map.jpg'

export default function Map() {
  return (
    <View style={styles.container}>
        <Image source={mapImg} style={styles.mapStyle}></Image>
    </View>
  );
}

const styles = StyleSheet.create({

    container: {  
        flex: 1,
        backgroundColor: 'rgba(0, 102, 204, 0.8)',
        alignItems: 'center',
        justifyContent: 'center',
    },

    mapStyle:{
        height: 200,
        width: 300,
    },
});