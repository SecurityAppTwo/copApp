import axios from 'axios';
import React, { useState } from 'react';
import { StyleSheet, View, Image, Button, Text } from 'react-native';
import { TextInput, Card } from 'react-native-paper';
import paraltaLogo from '../assets/jakeParalta.png';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function SignIn({setIsSignedIn}) {

  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem('user_id', jsonValue);
      setIsSignedIn(true);
    } catch (e) {
    }
  }

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const login = () => {
      if (userName && password){
        axios.get(`http://police-server-securityapp2.apps.openforce.openforce.biz/users/validateUser?username=${userName}&password=${password}`)
        .then(result => {
          if (result.data.isValid){
            var id = result.data.id;
            if (result.data.isCop){
              storeData(id);
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
    <Image source={paraltaLogo} style={styles.logo}></Image>
            <Card style={styles.card}>
                <View>
                <TextInput style={styles.input} value={userName} onChangeText={setUserName} placeholder='שם משתמש'/>
                <TextInput style={styles.input} value={password} onChangeText={setPassword} placeholder='סיסמא'/>
                </View>
            </Card>
            <View style={styles.button}>
                <Button  color="rgba(0,0,0,0.6)" title="התחבר" onPress={login}/>
            </View>
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
  logo:{
    height: 135,
    width: 135,
},
  card: {
      margin: '15%',
      width: '90%',
      display: 'flex',
      justifyContent: "center"
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    textAlign: "center"

  },
  button: {
    width: '30%'
  }
});
