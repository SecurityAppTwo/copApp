import React, { useEffect } from 'react';
import { View, KeyboardAvoidingView, TextInput, StyleSheet, Platform, TouchableWithoutFeedback, Keyboard, ImageBackground, Alert } from 'react-native';
import { Modal, Portal, Text, Button, Provider } from 'react-native-paper';

const Identification = () => {
    let [text, onChangeText] = React.useState(null);
    const [suspect, setSuspect] = React.useState(undefined);

    // const [visible, setVisible] = React.useState(false);
    // const showModal = () => { setVisible(true) };
    // const hideModal = () => setVisible(false);
    // const [suspect, setSuspect] = React.useState('');
    useEffect((suspect) => {
        Alert.alert(
            `${suspect.name}`,
            `האם חשוד: ${suspect.isSuspect ? 'כן' : 'לא'}`,
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                { text: "OK", onPress: () => console.log("OK Pressed") }
            ]
        );
    }, [suspect]);


    const containerStyle = { backgroundColor: 'white', padding: 20, width: '50%', height: '50%', display: 'flex', alignItems: 'center' };
    const check = () => {
        let suspect;
        if (!suspectsids[text] && notid[text]) {
            suspect = {name: notid[text], isSuspect: false};
            setSuspect({name: notid[text], isSuspect: false});
        } else if (suspectsids[text] && !notid[text]) {
            suspect = {name: suspectsids[text], isSuspect: true}
            setSuspect({name: suspectsids[text], isSuspect: true});
        } else {
            setInfo('הת.ז לא נמצא במאגר')
        }
        // showModal();
        alert(text)
        // alert(suspect)
        // createTwoButtonAlert(suspect);
    }
    const notid = {
        "000000000": "lili blabla"
    }
    const suspectsids = {
        "123456789": "ג'ק המחסל"
    };

    return (
        <ImageBackground source={require('../assets/id.jpg')} style={styles.image}>
            <View style={styles.inner}>
                <View style={{ backgroundColor: "rgba(255, 255, 255, 0.8)", marginTop: 100, borderRadius: 15 }}>
                    <Text style={styles.header} >זיהוי לפי ת.ז</Text>
                    <Text style={styles.id}>הכנס מס' תעודת זהות</Text>
                    <TextInput style={styles.textInput} onChangeText={(val) => onChangeText(val)}
                        value={text}  />
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