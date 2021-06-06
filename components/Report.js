import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Picker } from 'react-native';
import {Block} from 'react-native-block'
import StabbingBlock from './Stabbing.js'
export default function Report() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>דיווח</Text>
      {/* <StatusBar style="auto" /> */}
      <View style={styles.reportBlock} >
        <Picker>
        <Picker.Item label="רצח" value="murder" />
        <Picker.Item label="חטיפה" value="kidnap" />
        <Picker.Item label="נסיון דקירה" value="stabbing" />
        <Picker.Item label="תאונה" value="accident" />
        </Picker>
        <StabbingBlock></StabbingBlock>
      </View>

      <Button title="שלח דיווח" style={styles.sendButton}></Button>
    </View>

    
  );
}

const styles = StyleSheet.create({
  reportBlock : {
    backgroundColor: "#FFFFFF",
    width: 500,

  },  
  container: {
    flex: 1,
    backgroundColor: '#367df7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 50
  },
  sendButton: {
    marginTop: 50,
    backgroundColor: "#000000"
  }
});
