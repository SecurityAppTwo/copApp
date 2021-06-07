import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Block} from 'react-native-block'

export default function Report() {
  return (
    <View style={styles.container}>
      <Text>דיווח</Text>
      <StatusBar style="auto" />
      <Block flex={2} center middle mt={10}>
         // Your components
      </Block>
    </View>

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#367df7',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
