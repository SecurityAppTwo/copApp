import React ,{useState} from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView, ScrollView, StatusBar } from 'react-native';
import StabbingBlock from './Stabbing.js';
import ShootingBlock from './Shooting.js';
import KidnapBlock from './Kidnapping';
import AccidentBlock from './Accident';
import axios from 'axios';
import * as Location from 'expo-location'
import DropDownPicker from 'react-native-dropdown-picker';
import {MaterialCommunityIcons, FontAwesome5} from '@expo/vector-icons';

// import {ReportDropDown} from './ReportDropDown.js';

export default function Report() {
  
  // ### Adjust Dates ###

  let stabbingDetails = {stabber: '', weaponType:'', injuredCount:0, date:new Date(), injuredType: '', lon:0, lat:0, reportedBy: 1};
  let shootingDetails = {shooter:'', weaponType:'', injuredCount:0, date:new Date(), injuredType: '', lon:0, lat:0, reportedBy: 1};
  let kidnapDetails = {kidnapper:'', kidnapped:'', lastLocation:'', date:new Date(), reportDate:new Date(), lon:0, lat:0, reportedBy: 1};
  let accidentDetails = {injured:'', driver:'', injuredCount:0, date:new Date(), reportDate:new Date(), lon:0, lat:0, reportedBy: 1};

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'ירי', value: 'shooting', icon: () => <MaterialCommunityIcons name="target-account" color='#000000' size={24} />},
    {label: 'חטיפה', value: 'kidnap', icon: () => <MaterialCommunityIcons name="account-search" color='#000000' size={24} />},
    {label: 'תאונה', value: 'accident', icon: () => <FontAwesome5 name="car-crash" color='#000000' size={22} />},
    {label: 'דקירה', value: 'stabbing', icon: () => <MaterialCommunityIcons name="knife-military" color='#000000' size={24} />},

  ]);

  let [selected, onChangeSelected] = useState("");

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
  

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{ flex: 1 }}
          contentContainerStyle={styles.scrollview}>

            {/* <View style={styles.upperPart}> */}
            <Text style={styles.header}>הזנת דיווח</Text>


            {/* <View style={styles.midPart}> */}
              {/* <ReportDropDown></ReportDropDown> */}
              <DropDownPicker 
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                    placeholder="בחר אירוע"
                    placeholderStyle={{
                      color: "grey",
                      fontWeight: "bold"
                    }}
                    textStyle={{
                      fontSize: 18
                    }}
                    onChangeValue={(value) => {
                      console.log(value);
                    }}
                    
                  />

      {/* <View style={styles.row}>
                <Button tyle={styles.roundedButton} onPress={() => {onChangeSelected("shooting")}} title="ירי" color="rgba(255, 51, 0, 0.5)"></Button>
                <Button style={styles.roundedButton} onPress={() => {onChangeSelected("kidnap")}} title="חטיפה" color="rgba(255, 51, 0, 0.5)"></Button>
                <Button style={styles.roundedButton} onPress={() => {onChangeSelected("accident")}} title="תאונה" color="rgba(255, 51, 0, 0.5)"></Button>
                <Button style={styles.roundedButton} onPress={() => {onChangeSelected("stabbing")}} title="דקירה" color="rgba(255, 51, 0, 0.5)"></Button>
              </View>*/}
            

            <View>
                {value === "shooting" ? (<ShootingBlock shootingInfo={shootingDetails}></ShootingBlock>) : 
                value === "kidnap" ? (<KidnapBlock kidnapInfo={kidnapDetails}></KidnapBlock>) :
                value === "accident" ? (<AccidentBlock accidentInfo={accidentDetails}></AccidentBlock>) : 
                value === "stabbing" ? (<StabbingBlock stabbingInfo={stabbingDetails}></StabbingBlock>) : <View/>}
            </View>

            <Button title="שלח דיווח" style={styles.sendButton} onPress={() => {
              switch(selected){
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
            }}></Button>
      </ScrollView>
    </SafeAreaView>

    
  );
}

const styles = StyleSheet.create({
  superBottomPart : {
    height: "6%",
  },
  roundedButton: {
  },
  row : {
    flexDirection: "row",
    justifyContent: "space-around"
  },
  upperPart : {
    height: "10%",
    marginTop: 60
  },
  bottomPart: {
    height: "63%",
  },
  midPart : {
    height: "8%",
    width: "70%"
  },
  reportBlock : {
    width: 300,

  },  
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '50%',
    height:'50%'
  },

  scrollView: {
    backgroundColor: 'pink',
  },

  header: {
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 40,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    borderRadius: 10,
    textAlign: "center",
    width: 300,
    height: 62,
    color: "midnightblue"
  },
  sendButton: {
    backgroundColor: "#000000",
    width: "30%"
  },
  itemNotSelectedBox : {
    fontSize: 40,
    textAlign: "center",
    marginBottom: 15,
    fontWeight: "bold",
    color:"#FFFFFF"
  }
});