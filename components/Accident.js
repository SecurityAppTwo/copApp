import React from 'react';
import { StyleSheet, Text, View, TextInput, Switch} from 'react-native';
import { Card } from 'react-native-elements'

export default function Report({accidentInfo}) {
  const [isEnabled, setIsEnabled] = React.useState(false);
  const toggleSwitch = () => {
    isEnabled? accidentInfo.injuredType = 2 : accidentInfo.injuredType = 1
    setIsEnabled(previousState => !previousState);
  };
  return (
    <View style={styles.detailsBlock}>
      <Card containerStyle={styles.card}>
          <Card.Title style={{color:"#FFFFFF"}}>דיווח על אירוע תאונה</Card.Title>
          <Card.Divider/>
          <Card.Image source={require("../assets/accident.png")}></Card.Image>
      <View style={styles.row} >
          <View style={styles.col}>
              <Switch style={{marginLeft: 40, marginTop:5, marginBottom: 10}}
              trackColor={{ false: "#767577", true: "rgb(128, 204, 255)" }}
              thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
              onValueChange={toggleSwitch}
              value={isEnabled}
              />
              <TextInput style={styles.inputBox} onChangeText={(text) => accidentInfo.driver = text}></TextInput>
              <TextInput style={styles.inputBox} onChangeText={(text) => accidentInfo.injuredCount = text}></TextInput>
              <TextInput style={styles.inputBox} onChangeText={(text) => accidentInfo.date = new Date()}></TextInput>
              <TextInput style={styles.inputBox} onChangeText={(text) => accidentInfo.reportedBy = 1}></TextInput>
          </View>
          <View style={styles.col}>
                <Text style={styles.textBox}>נפגעים מכוחותינו?</Text>
                <Text style={styles.textBox}>נהג פוגע</Text>
                <Text style={styles.textBox}>כמות פצועים</Text>
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
    color:"#FFFFFF"
  }
});
