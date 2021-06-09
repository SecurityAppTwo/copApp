import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { Card } from 'react-native-elements'
import { TextInput } from 'react-native-paper';

export default function Accident({accidentInfo}) {
  return (
    <View style={styles.containerStyle}>
      <Card containerStyle={styles.card} borderRadius={3}>
          <Card.Title style={{color:"#FFFFFF", fontSize:18}}>דיווח על אירוע תאונה</Card.Title>
          <Card.Divider/>
          <Card.Image source={require("../assets/accident.png") } style={styles.imgStyle}></Card.Image>
              <TextInput label="פירוט נפגעים" style={styles.inputBox} onChangeText={(text) => accidentInfo.injured = text}></TextInput>
              <TextInput label="נהג פוגע" style={styles.inputBox} onChangeText={(text) => accidentInfo.driver = text}></TextInput>
              <TextInput label="כמות פצועים" style={styles.inputBox} onChangeText={(text) => accidentInfo.injuredCount = text}></TextInput>
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
