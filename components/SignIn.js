import axios from 'axios';
import React, { useState } from 'react';
import { StyleSheet, View, Image, Button, Text } from 'react-native';
import { TextInput, Card } from 'react-native-paper';
import AsyncStorage from '@react-native-community/async-storage'
// import store from 'react-native-simple-store'

export default function SignIn({setIsSignedIn}) {

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [text, setText] = useState('');

    const login = () => {
      if (userName && password){
        axios.get(`http://localhost:8080/users/validateUser?username=${userName}&password=${password}`)
        .then(result => {
          if (result.data.isValid){
            var id = result.data.id;
            if (result.data.isCop){
              AsyncStorage.setItem('userId', id);
              setIsSignedIn(true);
            } else{
              alert('אינך שוטר המורשה להיכנס למערכת')
            }
          } else{
            alert('הסיסמא או שם המשתמש לא נכונים, אנא נסה שוב')
          }
        })
        .catch(error => alert(error.message));
      } else{
        alert('אנא מלא את השדות')
      }
      
    }

    return (
        <View style={styles.container}>
            <Card style={styles.card}>
                <View>
                <TextInput style={styles.input} value={userName} onChangeText={setUserName} placeholder='שם משתמש'/>
                <TextInput style={styles.input} value={password} onChangeText={setPassword} placeholder='סיסמא'/>
                </View>
            </Card>
            <View style={styles.button}>
                <Button  color="rgba(0,0,0,0.6)" title="התחבר" onPress={login}/>
            </View>
            <Text>{text}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    backgroundColor: 'rgba(0, 102, 204, 0.8)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  card: {
      margin: '15%',
      width: '90%',
      height: '%',
      display: 'flex'
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    textAlign: "right"

  },
  button: {
    width: '30%'
  }
});
