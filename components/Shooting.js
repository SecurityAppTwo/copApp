import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { Card } from 'react-native-elements'
import { TextInput } from 'react-native-paper';

export default function Shooting({shootingInfo}) {
  
  return (
    <View style={styles.containerStyle}>
        <Card containerStyle={styles.card} borderRadius={3}>
          <Card.Title style={{color:"#FFFFFF", fontSize:18}}>דיווח על אירוע ירי</Card.Title>
          <Card.Divider/>
          <Card.Image source={require("../assets/shooting.jpeg")} style={styles.imgStyle}></Card.Image>

              <TextInput label="פירוט נפגעים" style={styles.inputBox}  onChangeText={(text) => shootingInfo.injuredType = text}></TextInput>
              <TextInput label="המפגע" style={styles.inputBox} onChangeText={(text) => shootingInfo.shooter = text}></TextInput>
              <TextInput label="סוג נשק" style={styles.inputBox} onChangeText={(text) => shootingInfo.weaponType = text}></TextInput>
              <TextInput label="מספר נפגעים" style={styles.inputBox}  onChangeText={(text) => shootingInfo.injuredCount = text} keyboardType="numeric"></TextInput> 
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
