import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Switch} from 'react-native';
import { Card } from 'react-native-elements'
import { color } from 'react-native-elements/dist/helpers';
export default function Report({stabbingInfo}) {
    const [isEnabled, setIsEnabled] = React.useState(false);
  const toggleSwitch = () => {
    isEnabled? stabbingInfo.injuredType = 2 : stabbingInfo.injuredType = 1
    setIsEnabled(previousState => !previousState);
  };
  return (
    <View style={styles.detailsBlock}>
        <Card containerStyle={styles.card}>
          <Card.Title style={{color:"#FFFFFF"}}>דיווח על אירוע דקירה</Card.Title>
          <Card.Divider/>
          <Card.Image source={require("../assets/stabbing.jpg")}></Card.Image>
          <View style={styles.row} >
          <View style={styles.col}>
          <Switch style={{marginLeft: 40, marginTop:5, marginBottom: 10}}
              trackColor={{ false: "#767577", true: "rgb(128, 204, 255)" }}
              thumbColor={isEnabled ? "rgb(153, 235, 255)" : "#f4f3f4"}
              onValueChange={toggleSwitch}
              value={isEnabled}
              />
          <TextInput style={styles.inputBox} onChangeText={(text) => stabbingInfo.stabber = text}></TextInput>
              <TextInput style={styles.inputBox} onChangeText={(text) => stabbingInfo.weaponType = text}></TextInput>
              <TextInput style={styles.inputBox} keyboardType='numeric' onChangeText={(text) => stabbingInfo.injuredCount = text}></TextInput>
              <TextInput style={styles.inputBox} onChangeText={(text) => stabbingInfo.date = new Date()}></TextInput>
              <TextInput style={styles.inputBox} onChangeText={(text) => stabbingInfo.reportedBy = 1}></TextInput> 
              {/* UPDATE WHEN AUTHENTICATION IS READY */}
          </View>
          <View style={styles.col}>
          <Text style={styles.textBox}>נפגעים מכוחותינו?</Text>

          <Text style={styles.textBox}>האדם התוקף</Text>
                <Text style={styles.textBox}>סוג נשק</Text>
                <Text style={styles.textBox}>נפגעים</Text>
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
    // innerHeight: 40,
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
