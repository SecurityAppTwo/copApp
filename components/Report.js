import React from 'react';
import { Text, View, Button, Picker } from 'react-native';
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
