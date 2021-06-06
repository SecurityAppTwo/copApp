import React from 'react';
import { View, KeyboardAvoidingView, TextInput, StyleSheet,  Platform, TouchableWithoutFeedback, Keyboard, } from 'react-native';
import { Modal, Portal,Text, Button, Provider } from 'react-native-paper';
const Identification = () => {
    let [text, onChangeText] = React.useState(null);
    const [visible, setVisible] = React.useState(false);
    const showModal = () => {setVisible(true)};
    const hideModal = () => setVisible(false);
    const containerStyle = { backgroundColor: 'white', padding: 20, width:'50%', height:'50%', display: 'flex', alignItems: 'center'};
    let info='';
    const check = () => {
        if(!suspectsids.text && notid.text){
            info=`${notid.text}
            האם חשוד: לא`;
        } else if(suspectsids.text && !notid.text){
            info=`${suspectsids.text}
            האם חשוד: לא`;
        } else {
            info=`הת.ז לא נמצא במאגר`;
        }
        showModal();

    }
    const notid={
        "000000000":"lili blabla"
    }
    const suspectsids ={
        "123456789":"ג'ק המחסל"
    };

    return (
        // <KeyboardAvoidingView
        //   behavior={Platform.OS === "ios" ? "padding" : "height"}
        //   style={styles.container}
        // >
        //   <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
            <Text style={styles.header}>זיהוי לפי ת.ז</Text>
            <Text style={styles.id}>הכנס מס' תעודת זהות</Text>
            <TextInput style={styles.textInput} onChangeText={(val) => onChangeText(val)}
                value={text} />
            <View style={styles.btnContainer}>
            <Button title="קבל מידע רלוונטי" onPress={() => check()} >
                    <Text style={{ color: "blue" }}>קבל מידע רלוונטי</Text>
                </Button>

            </View>
            <Provider >
      <Portal>
        <Modal style={{display: 'flex', alignItems: 'center'}} visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
          <Text>{info}</Text>
        </Modal>
      </Portal>
    </Provider>
        </View>
        //  {/* </TouchableWithoutFeedback>
        // </KeyboardAvoidingView> */}
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
        justifyContent: "center",
        alignItems: "center",
        alignContent:"center",
        backgroundColor: `#c0c0c0`
    },
    header: {
        fontSize: 36,
        marginBottom: 48
    },
    id: {
        marginTop: 30,
        fontSize: 30,
        color: `#fffafa`
    },
    textInput: {
        marginTop: 30,
        height: 40,
        borderColor: "#000000",
        borderWidth: 1,
        borderBottomWidth: 1,
    },
    btnContainer: {
        backgroundColor: "turquoise",
        color: "blue",
        marginTop: 50
    }
});




export default Identification;