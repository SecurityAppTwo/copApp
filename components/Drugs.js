import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function Report() {
  return (
    <View style={styles.detailsBlock}>
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
    </View>

    
  );
}

const styles = StyleSheet.create({
  detailsBlock : {
    backgroundColor: "#0e1001",
    width: 500,

  },  
  row: {
    justifyContent: 'space-around',
    // innerHeight: 40,
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
