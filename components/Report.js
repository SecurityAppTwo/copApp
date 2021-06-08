import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Report = () => {
  return (
    <View style={styles.container}>
      <Text>דיווח</Text>
    </View>
  );
}

export default Report

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#367df7',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
