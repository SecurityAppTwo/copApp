import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, ImageBackground } from 'react-native';
import CustomPicker from 'react-native-picker-select'
import { Card } from 'react-native-elements'
import StabbingBlock from './Stabbing.js';
import MurderBlock from './Murder.js';
import KidnapBlock from './Kidnapping';
import AccidentBlock from './Accident';

export default function Report() {
  let [selected, onChangeSelected] = React.useState("");
  let selectedBlock = "";
  return (
    <ImageBackground source={require('../assets/brickback.jpg')} style={styles.container}>
      <View style={styles.upperPart}>
      <Text style={styles.header}>הזנת דיווח</Text>
      </View>
      <View style={styles.midPart}>
        <View>
        {/* <CustomPicker selectedValue={selectedBlock}
         onValueChange={(value) =>onChangeSelected(value)}
         items={[
          {label:"רצח", value:"murder"},
          {label:"חטיפה", value:"kidnap"},
          {label:"נסיון דקירה", value:"stabbing" },
          {label:"תאונה", value:"accident"}
        ]}>
          
        </CustomPicker> */}
        </View>
      
        <View style={styles.reportBlock} >
        {selected === "murder" ? (<MurderBlock></MurderBlock>) : 
         selected === "kidnap" ? (<KidnapBlock></KidnapBlock>) :
         selected === "accident" ? (<AccidentBlock></AccidentBlock>) : 
         selected === "stabbing" ? (<StabbingBlock></StabbingBlock>) : <Text style={styles.itemNotSelectedBox}>בחר אירוע</Text>}
      </View>
      </View>
      <View style={styles.bottomPart}>
        <View style={styles.row}>
          <Button style={styles.roundedButton} onPress={() => {onChangeSelected("murder")}} title="רצח" color="rgb(51, 173, 255)"></Button>
          <Button style={styles.roundedButton} onPress={() => {onChangeSelected("kidnap")}} title="חטיפה" color="rgb(51, 173, 255)"></Button>
          <Button style={styles.roundedButton} onPress={() => {onChangeSelected("accident")}} title="תאונה" color="rgb(51, 173, 255)"></Button>
          <Button style={styles.roundedButton} onPress={() => {onChangeSelected("stabbing")}} title="דקירה" color="rgb(51, 173, 255)"></Button>
        </View>
      <Button title="שלח דיווח" style={styles.sendButton}></Button>
      </View>
     
    </ImageBackground>


    
  );
}

const styles = StyleSheet.create({
  roundedButton: {
    borderRadius: "100%",
    backgroundColor: "#FFFFFF"
  },
  row : {
    flexDirection: "row",
    justifyContent: "space-around"
  },
  upperPart : {
    height: "10%",
    marginTop: 100
  },
  midPart: {
    height: "60%"
  },
  bottomPart : {
    height: "10%",
    width: "100%"
  },
  reportBlock : {
    width: 300,

  },  
  container: {
    flex: 1,
    alignItems: 'center',
  },
  header: {
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 40,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    borderRadius: 10,
    textAlign: "center",
    width: 300,
    height: 62,
    color: "midnightblue"
  },
  sendButton: {
    backgroundColor: "#000000",
    width: "30%"
  },
  itemNotSelectedBox : {
    marginTop: 15,
    fontSize: 40,
    textAlign: "center",
    marginBottom: 15,
    fontWeight: "bold"
  },
  picker : {
    width: "70%",
    marginLeft: "10%"
  }
});
