import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Card } from 'react-native-elements'

export default function Report({kidnapInfo}) {
  return (
    <View style={styles.detailsBlock}>
        <Card containerStyle={styles.card}>
          <Card.Title style={{color:"#FFFFFF"}}>דיווח על אירוע חטיפה</Card.Title>
          <Card.Divider/>
          <Card.Image source={require("../assets/kidnap.jpg")}></Card.Image>
      <View style={styles.row} >
          <View style={styles.col}>
              <TextInput style={styles.inputBox} onChangeText={(text) => kidnapInfo.kidnapper = text}></TextInput>
              <TextInput style={styles.inputBox} onChangeText={(text) => kidnapInfo.kidnapped = text}></TextInput>
              <TextInput style={styles.inputBox} onChangeText={(text) => kidnapInfo.lastLocation = text}></TextInput>
              <TextInput style={styles.inputBox} onChangeText={(text) => kidnapInfo.date = new Date()}></TextInput>
              <TextInput style={styles.inputBox} onChangeText={(text) => kidnapInfo.reportedBy = 1}></TextInput>
            {/* UPDATE WHEN AUTHENTICATION IS READY */}
          </View>
          <View style={styles.col}>
                <Text style={styles.textBox}>חוטף</Text>
                <Text style={styles.textBox}>נחטף</Text>
                <Text style={styles.textBox}>מיקום אחרון ידוע</Text>
                <Text style={styles.textBox}>זמן האירוע</Text>
                <Text style={styles.textBox}>מי דיווח</Text>
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
    color:"#FFFFFF"
  }
});
