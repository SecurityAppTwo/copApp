import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Picker, ImageBackground } from 'react-native';
import CustomPicker from 'react-native-picker-select'
import Pages from './Pages.js'
import StabbingBlock from './Stabbing.js';
import MurderBlock from './Murder.js';
import KidnapBlock from './Kidnapping';
import AccidentBlock from './Accident';
export default function Report() {
  const [selected, onChangeSelected] = React.useState("");
  return (
    <ImageBackground source={require('../assets/brickback.jpg')} style={styles.container}>


      <View style={styles.upperPart}>
      <Text style={styles.header}>הזנת דיווח</Text>
      </View>
      <View style={styles.midPart}>
        <View>
        <CustomPicker selectedValue={selected}
         onValueChange={(value) =>onChangeSelected(value)}
         items={[
          {label:"רצח", value:"murder"},
          {label:"חטיפה", value:"kidnap"},
          {label:"נסיון דקירה", value:"stabbing" },
          {label:"תאונה", value:"accident"}
        ]}>
          
        </CustomPicker>
        {/* <Picker selectedValue={selected}
          onValueChange={(value) => onChangeSelected(value)}>
            <Picker.Item label></Picker.Item>

          </Picker> */}
        </View>
      
        <View style={styles.reportBlock} >
        {selected === "murder" ? (<MurderBlock></MurderBlock>) : 
         selected === "kidnap" ? (<KidnapBlock></KidnapBlock>) :
         selected === "accident" ? (<AccidentBlock></AccidentBlock>) : 
         selected === "stabbing" ? (<StabbingBlock></StabbingBlock>) : <Text style={styles.itemNotSelectedBox}>בחר אירוע</Text>}
      </View>
      </View>
      <View style={styles.bottomPart}>
      <Button title="שלח דיווח" style={styles.sendButton}></Button>
      </View>

    </ImageBackground>


    
  );
}

const styles = StyleSheet.create({
  upperPart : {
    height: 100,
    marginTop: 100
  },
  midPart: {
    height: 300
  },
  bottomPart : {
    height: 200
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
    backgroundColor: "#000000"
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
