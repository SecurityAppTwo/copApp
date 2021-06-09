import React, {useState} from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, View, Pressable , Image} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

import StabbingBlock from './Stabbing.js';
import ShootingBlock from './Shooting.js';
import KidnapBlock from './Kidnapping';
import AccidentBlock from './Accident';

import paraltaLogo from '../assets/jakeParalta.png';



export default function Report(){
    const [value, setValue] = useState('shooting');

    let stabbingDetails = {stabber: '', weaponType:'', injuredCount:0, date:new Date(), injuredType: '', lon:0, lat:0, reportedBy: 1};
    let shootingDetails = {shooter:'', weaponType:'', injuredCount:0, date:new Date(), injuredType: '', lon:0, lat:0, reportedBy: 1};
    let kidnapDetails = {kidnapper:'', kidnapped:'', lastLocation:'', date:new Date(), reportDate:new Date(), lon:0, lat:0, reportedBy: 1};
    let accidentDetails = {injured:'', driver:'', injuredCount:0, date:new Date(), reportDate:new Date(), lon:0, lat:0, reportedBy: 1};
  
    const saveReport = async (url, details) => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          setErrorMsg('Permission to access location was denied');
          return;
        }

    let location = await Location.getCurrentPositionAsync({});
    details.lat = location.coords.latitude;
    details.lon = location.coords.longitude;
    axios.post(url, details).then(() => alert("הדיווח נשלח בהצלחה"))
      };

    return(
    <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'flex-start' , alignItems: 'center',}}>
        
        <View style={styles.headerView}>
            <Image source={paraltaLogo} style={styles.logo}></Image>
            {/* <Text style={styles.headerText}>דיווח</Text> */}
            <View style={styles.dropDownView}>
                <RNPickerSelect
                    onValueChange={(value) => {setValue(value)}}
                    placeholder={{}}
                    style={pickerStyle}
                    // useNativeAndroidPickerStyle={false}
                    items={[
                    {label: 'ירי', value: 'shooting'},
                    {label: 'חטיפה', value: 'kidnap'},
                    {label: 'תאונה', value: 'accident'},
                    {label: 'דקירה', value: 'stabbing'}
                ]}           
                />
            </View>


        </View> 
        
            <View style={styles.reportCard}>
                {value === "shooting" ? (<ShootingBlock shootingInfo={shootingDetails}></ShootingBlock>) : 
                value === "kidnap" ? (<KidnapBlock kidnapInfo={kidnapDetails}></KidnapBlock>) :
                value === "accident" ? (<AccidentBlock accidentInfo={accidentDetails}></AccidentBlock>) : 
                value === "stabbing" ? (<StabbingBlock stabbingInfo={stabbingDetails}></StabbingBlock>) : <View/>}
            </View>
            
            <Pressable style={styles.button} onPress={() => {
              switch(value){
                case ('shooting'):
                  saveReport('http://police-server-securityapp2.apps.openforce.openforce.biz/reports/add/shootingEvent', shootingDetails);
                  break;
                  case ('kidnap'):
                    saveReport('http://police-server-securityapp2.apps.openforce.openforce.biz/reports/add/kidnapEvent', kidnapDetails);
                    break;
                    case ('accident'):
                      saveReport('http://police-server-securityapp2.apps.openforce.openforce.biz/reports/add/accidentEvent', accidentDetails);
                    break;
                    case ('stabbing'):
                      saveReport('http://police-server-securityapp2.apps.openforce.openforce.biz/reports/add/stabbingEvent', stabbingDetails);
                    break;
              }
                    }}><Text style={styles.buttonText}>שלח דיווח</Text>
                    </Pressable>

                

    </ScrollView>
    </SafeAreaView>)
}

const styles = StyleSheet.create({

    container: {  
        flex: 1,
        backgroundColor: 'rgba(0, 102, 204, 0.1)',
    },

    headerView:{
        backgroundColor:'rgba(0, 102, 204, 0.8)',
        width:'100%',
        alignItems: 'center',
        // flexWrap:'nowrap'

    },

    headerText:{
        marginTop:'10%',
        fontSize: 28,
        fontWeight: "bold",
        marginBottom: '5%',
        backgroundColor: "rgba(255, 255, 255, 0.9)",
        borderRadius: 10,
        borderColor: 'black',
        borderWidth:1,
        textAlign: "center",
        width: '25%',
        color: "black"
    },

    dropDownView:{
        width:'60%',
    },

    reportCard:{
        marginTop: '5%',
        width: '90%',
    },

    logo:{
        top:30,
        height: 80,
        width: 80,
    },
        pickerStyle:{
        fontSize: 14,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 8,
        color: 'black',
        backgroundColor: 'black',
        paddingRight: 30, // to ensure the text is never behind the icon
      },

      button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        borderColor: 'white',
        elevation: 3,
        backgroundColor: 'rgba(0, 102, 204, 0.8)',
        marginTop: '10%'
      },
      buttonText: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
      },
});

const pickerStyle = {
	inputIOS: {
		color: 'white',
		paddingTop: 13,
		paddingHorizontal: 10,
		paddingBottom: 12,
	},
	inputAndroid: {
        color: 'white',
	},
	placeholderColor: 'white',
	underline: { borderTopWidth: 4},
	icon: {
		position: 'absolute',
		backgroundColor: 'transparent',
		borderTopWidth: 5,
		borderTopColor: '#00000099',
		borderRightWidth: 5,
		borderRightColor: 'transparent',
		borderLeftWidth: 5,
		borderLeftColor: 'transparent',
		width: 0,
		height: 0,
		top: 20,
		right: 5,
	},
};
