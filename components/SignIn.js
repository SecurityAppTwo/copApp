import axios from 'axios';
import React, { useState } from 'react';
import { StyleSheet, View, Image, Button, Text } from 'react-native';
import { TextInput, Card } from 'react-native-paper';
import AsyncStorage from '@react-native-community/async-storage'
// import store from 'react-native-simple-store'

export default function SignIn(validator) {

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [text, setText] = useState('');

    const login = () => {

      AsyncStorage.setItem('user', {id: 123456}).then(() => {
        AsyncStorage.getItem('user').then(res => {
          alert(res.id)
        });
      })
      
      axios.get(`http://localhost:8080/users/validateUser?username=${userName}&password=${password}`)
        .then(result => {
          if (result.isValid){
            // store.update('user', {userId: result.id})
            AsyncStorage.setItem('user', {id: result.id}).then(() => {
              AsyncStorage.getItem('user').then(res => {
                alert(res)
              });
            })
          } else{
            alert('w8 what');
          }

          validator.isValid = result.isValid;
        })
        .catch(error => alert(error.message));
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
