import React from 'react';
import { StyleSheet, Text, View, TextInput, Switch } from 'react-native';
import { Card } from 'react-native-elements'

export default function Report({shootingInfo}) {
  
  // const [isEnabled, setIsEnabled] = React.useState(false);
  // const toggleSwitch = () => {
  //   isEnabled? shootingInfo.injuredType = 2 : shootingInfo.injuredType = 1
  //   setIsEnabled(previousState => !previousState);
  // };

  return (
    <View style={styles.detailsBlock}>
        <Card containerStyle={styles.card}>
          <Card.Title style={{color:"#FFFFFF"}}>דיווח על אירוע ירי</Card.Title>
          <Card.Divider/>
          <Card.Image source={require("../assets/shooting.jpeg")}></Card.Image>
      <View style={styles.row} >
          <View style={styles.col}>
          
          {/* <Switch style={{marginLeft: 40, marginTop:5, marginBottom: 10}}
              trackColor={{ false: "#767577", true: "rgb(128, 204, 255)" }}
              thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
              onValueChange={toggleSwitch}
              value={isEnabled}
              /> */}
              <TextInput style={styles.inputBox} onChangeText={(text) => shootingInfo.injuredType = text}></TextInput>


              <TextInput style={styles.inputBox} onChangeText={(text) => shootingInfo.shooter = text}></TextInput>
              <TextInput style={styles.inputBox} onChangeText={(text) => shootingInfo.weaponType = text}></TextInput>
              <TextInput style={styles.inputBox} onChangeText={(text) => shootingInfo.injuredCount = text} keyboardType="numeric"></TextInput>
              <TextInput style={styles.inputBox} onChangeText={(text) => shootingInfo.date = new Date()}></TextInput>
              <TextInput style={styles.inputBox} onChangeText={(text) => shootingInfo.reportedBy = 1}></TextInput>
              {/* UPDATE WHEN AUTHENTICATION IS READY */}
          </View>
          <View style={styles.col}>
                <Text style={styles.textBox}>פירוט נפגעים</Text>
                <Text style={styles.textBox}>המפגע</Text>
                <Text style={styles.textBox}>סוג נשק</Text>
                <Text style={styles.textBox}>מספר נפגעים</Text>
                <Text style={styles.textBox}>זמן האירוע</Text>
                <Text style={styles.textBox}>זהות המדווח</Text>
          </View>
      </View>
      </Card>
    </View>

    
  );
}

const styles = StyleSheet.create({
  card:{
    backgroundColor: "rgba(0,0,0,0.6)",
},  
  row: {
    justifyContent: 'space-around',
    flexDirection: "row"
  },
  col: {
    justifyContent: 'space-around',
    flexDirection: "column",
    width: "50%"
  },
  inputBox : {
      marginTop: 5,
      marginBottom: 5,
      backgroundColor: "rgba(0,0,0,0.6)",
      borderColor: "#FFFFFF",
      borderWidth: 1,
      borderRadius:5,
      color:"#FFFFFF",
      textAlign:"right"
  },
  textBox: {
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: "rgba(0,0,0,0.6)",
    color: "#FFFFFF"
  }
});
