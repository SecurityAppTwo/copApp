import React from 'react';
import { View, TextInput, StyleSheet, ImageBackground, Alert } from 'react-native';
import { Text, Button} from 'react-native-paper';
const axios = require('axios');
const Identification = () => {
    let [text, onChangeText] = React.useState(null);
    const createTwoButtonAlert = (suspect) => {
        Alert.alert(
            `${suspect.name}`,
            `האם חשוד: ${suspect.isSuspect==="true" ? 'כן' : 'לא'}`,
            [
                {
                    text: "סגירה",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                }
            ]
        );
    }

    const createAlert=()=>{
        Alert.alert(
            `הת.ז לא נמצא במאגר`,
            ``,
            [
                {
                    text: "סגירה",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                }
            ]
        );
    }


    const check =  () => {
        let suspect;
    axios.get(`http://app-api-f-intelscraping2.apps.openforce.openforce.biz/profile/id/${text}/isSuspect`)
  .then((res)=> {   
      if(res.data.firstname) {
          const { firstname, lastname, isSuspect } = res.data;
          suspect={ name:`${firstname} ${lastname}`, isSuspect };
          createTwoButtonAlert(suspect);
      } else {
          createAlert();
      }
  })
  .catch((err)=> {
    alert(err);
  });
        
    }

    return (
        <ImageBackground source={require('../assets/id.jpg')} style={styles.image}>
            <View style={styles.inner}>
                <View style={{ backgroundColor: "rgba(255, 255, 255, 0.8)", marginTop: 100, borderRadius: 15 }}>
                    <Text style={styles.header} >זיהוי לפי ת.ז</Text>
                    <Text style={styles.id}>הכנס מס' תעודת זהות</Text>
                    <TextInput style={styles.textInput} onChangeText={(val) => onChangeText(val)}
                        value={text} />
                </View>
                <View style={styles.btnContainer}>
                    <Button title="קבל מידע רלוונטי" onPress={() => check()} >
                        <Text style={{ color: "white", fontSize: 30 }}>קבל מידע רלוונטי</Text>
                    </Button>

                </View>

            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    inner: {
        fontSize: 36,
        padding: 24,
        flex: 1,


    },
    header: {
        fontSize: 36,
        marginBottom: 48,
        opacity: 1,
        textAlign: "center",
        color: "midnightblue",
        marginTop: 20,

    },
    id: {
        marginTop: 30,
        fontSize: 30,
        color: `midnightblue`,
        textAlign: "center"
    },
    textInput: {
        marginTop: 30,
        height: 40,
        borderColor: "#000000",
        borderWidth: 1,
        borderBottomWidth: 1,
        marginBottom: 10,
        borderRadius: 10,
        textAlign: "center",
        fontWeight: 'bold',
        fontSize: 20,
        color: "midnightblue"
    },
    btnContainer: {
        color: "white",
        marginTop: 150,
        borderWidth: 1,
        borderColor: "white",
        borderRadius: 10
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        width: '100%'
    },
});




export default Identification;