import axios from 'axios';
import React, { useState } from 'react';
import { StyleSheet, View, Image, Button, Text } from 'react-native';
import { TextInput, Card } from 'react-native-paper';

export default function SignIn() {

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [text, setText] = useState('');

    const login = () => {
      axios.get(`http://localhost:8080/users/validateUser?username=${userName}&password=${password}`)
        .then(result => {
          console.log(result);
        })
        .catch(error => console.log(error.message));
    }

    return (
        <View style={styles.container}>
            <Image source={require("../assets/nypd.png")}/>
            <Card style={styles.card}>
                <View>
                <TextInput style={styles.input} value={userName} onChangeText={setUserName} placeholder='שם משתמש'/>
                <TextInput style={styles.input} value={password} onChangeText={setPassword} placeholder='סיסמא'/>
                </View>
            </Card>
            <View style={styles.button}>
                <Button color="blue" title="התחבר" onPress={login}/>
            </View>
            <Text>{text}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    backgroundColor: 'rgb(133,134,141)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  card: {
      margin: '10%',
      width: '90%',
      height: '20%',
      display: 'flex'
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
  button: {
    backgroundColor: 'white',
    width: '30%'
  }
});
