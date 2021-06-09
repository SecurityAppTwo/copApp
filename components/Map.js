import React from 'react';
import { StyleSheet,Image, View} from 'react-native';
import { WebView } from 'react-native-webview';

export default function Map() {
  return (
    <View style={styles.container}>
        <WebView source={{ uri: 'http://alpha-maps-git-tmzmap2.apps.openforce.openforce.biz/' }} style={{width:420}}/>
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