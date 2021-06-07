import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Card } from 'react-native-elements'

export default function Report() {
  return (
    <View style={styles.detailsBlock}>
      <Card>
          <Card.Title>דיווח על אירוע תאונה</Card.Title>
          <Card.Divider/>
          <Card.Image source={require("../assets/accident.png")}></Card.Image>
      <View style={styles.row} >
          <View style={styles.col}>
              <TextInput style={styles.inputBox}></TextInput>
              <TextInput style={styles.inputBox}></TextInput>
              <TextInput style={styles.inputBox}></TextInput>
              <TextInput style={styles.inputBox}></TextInput>
              <TextInput style={styles.inputBox}></TextInput>
          </View>
          <View style={styles.col}>
                <Text style={styles.textBox}>מי מתקרב</Text>
                <Text style={styles.textBox}>האם נושא נשק</Text>
                <Text style={styles.textBox}>זמן האירוע</Text>
                <Text style={styles.textBox}>זמן דיווח האירוע</Text>
                <Text style={styles.textBox}>זהות המדווח</Text>
          </View>
      </View>
      </Card>
    </View>
  );
      
}

const styles = StyleSheet.create({
  detailsBlock : {
    backgroundColor: "#0e1001",

  },  
  row: {
    justifyContent: 'space-around',
    innerHeight: 40,
    flexDirection: "row"
  },
  col: {
    justifyContent: 'space-around',
    flexDirection: "column"
  },
  inputBox : {
      marginTop: 5,
      marginBottom: 5,
      backgroundColor: "#FFFFFF"
  },
  textBox: {
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: "#FFFFFF"
  }
});
