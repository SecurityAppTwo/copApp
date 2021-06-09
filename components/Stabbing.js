import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { Card } from 'react-native-elements'
import { TextInput } from 'react-native-paper';

export default function Stabbing({stabbingInfo}) {

  return (
    <View style={styles.containerStyle}>
        <Card containerStyle={styles.card}  borderRadius={3}>
          <Card.Title style={{color:"#FFFFFF", fontSize:18}}>דיווח על אירוע דקירה</Card.Title>
          <Card.Divider/>
          <Card.Image source={require("../assets/stabbing.jpg")} style={styles.imgStyle}></Card.Image>

              <TextInput label={"פירוט נפגעים"} style={styles.inputBox} onChangeText={(text) => stabbingInfo.injuredType = text}></TextInput>
              <TextInput label={"האדם התוקף"} style={styles.inputBox} onChangeText={(text) => stabbingInfo.stabber = text}></TextInput>
              <TextInput label={"סוג נשק"} style={styles.inputBox} onChangeText={(text) => stabbingInfo.weaponType = text}></TextInput>
              <TextInput label={"מספר נפגעים"} style={styles.inputBox} keyboardType='numeric' onChangeText={(text) => stabbingInfo.injuredCount = text}></TextInput>
              {/* UPDATE WHEN AUTHENTICATION IS READY */}

        </Card>
    </View>

    
  );
}

const styles = StyleSheet.create({

  containerStyle:{
    width:'100%',
  },

  card:{
    backgroundColor: "rgba(0, 102, 204, 0.8)",
  },  

  imgStyle:{
    borderColor:'rgba(214, 214, 214, 1)',
    borderRadius:12
  },

  inputBox : {
      marginTop: 5,
      marginBottom: 5,
      borderColor: "rgba(214, 214, 214, 1)",
      borderWidth: 2,
      borderRadius:6,
      textAlign:"right",
      height: 56,
      width: '100%'
  },
});
