import React from 'react';
import { StyleSheet, Text, View, Button, ImageBackground } from 'react-native';
import StabbingBlock from './Stabbing.js';
import ShootingBlock from './Shooting.js';
import KidnapBlock from './Kidnapping';
import AccidentBlock from './Accident';
import axios from 'axios';
import * as Location from 'expo-location'

export default function Report() {
  
  // ### Adjust Dates ###

  let stabbingDetails = {stabber: '', weaponType:'', injuredCount:0, date:new Date(), injuredType: '', lon:0, lat:0, reportedBy: 1};
  let shootingDetails = {shooter:'', weaponType:'', injuredCount:0, date:new Date(), injuredType: '', lon:0, lat:0, reportedBy: 1};
  let kidnapDetails = {kidnapper:'', kidnapped:'', lastLocation:'', date:new Date(), reportDate:new Date(), lon:0, lat:0, reportedBy: 1};
  let accidentDetails = {injured:'', driver:'', injuredCount:0, date:new Date(), reportDate:new Date(), lon:0, lat:0, reportedBy: 1};

  let [selected, onChangeSelected] = React.useState("");
  return (
    <ImageBackground source={require('../assets/brickback.jpg')} style={styles.container}>

      <View style={styles.upperPart}>
      <Text style={styles.header}>הזנת דיווח</Text>
      </View>

      <View style={styles.midPart}>
        <View style={styles.row}>
          <Button containerStyle={styles.roundedButton} onPress={() => {onChangeSelected("shooting")}} title="ירי" color="rgba(255, 51, 0, 0.5)"></Button>
          <Button style={styles.roundedButton} onPress={() => {onChangeSelected("kidnap")}} title="חטיפה" color="rgba(255, 51, 0, 0.5)"></Button>
          <Button style={styles.roundedButton} onPress={() => {onChangeSelected("accident")}} title="תאונה" color="rgba(255, 51, 0, 0.5)"></Button>
          <Button style={styles.roundedButton} onPress={() => {onChangeSelected("stabbing")}} title="דקירה" color="rgba(255, 51, 0, 0.5)"></Button>
        </View>
      </View>

      <View style={styles.bottomPart}>
        <View style={styles.reportBlock} >
        {selected === "shooting" ? (<ShootingBlock shootingInfo={shootingDetails}></ShootingBlock>) : 
         selected === "kidnap" ? (<KidnapBlock kidnapInfo={kidnapDetails}></KidnapBlock>) :
         selected === "accident" ? (<AccidentBlock accidentInfo={accidentDetails}></AccidentBlock>) : 
         selected === "stabbing" ? (<StabbingBlock stabbingInfo={stabbingDetails}></StabbingBlock>) : 
         <Text style={styles.itemNotSelectedBox}>בחר אירוע</Text>}
      </View>
      </View>

      <View style={styles.superBottomPart}>
      <Button title="שלח דיווח" style={styles.sendButton} onPress={() => {
        switch(selected){
          case ('shooting'):
            Location.getCurrentPositionAsync({}).then(res => {
              let location = res
              shootingDetails.lat = location.coords.latitude;
              shootingDetails.lon = location.coords.longitude;
              axios.post('http://police-server-securityapp2.apps.openforce.openforce.biz/reports/add/shootingEvent', shootingDetails).then(() => alert("הדיווח נשלח בהצלחה"))
            });

            break;
            case ('kidnap'):
                Location.getCurrentPositionAsync({}).then(res => {
                  let location = res
                  kidnapDetails.lat = location.coords.latitude;
                  kidnapDetails.lon = location.coords.longitude;
                  axios.post('http://police-server-securityapp2.apps.openforce.openforce.biz/reports/add/kidnapEvent', kidnapDetails).then(() => alert("הדיווח נשלח בהצלחה"))
                });
                

              break;
              case ('accident'):
                  Location.getCurrentPositionAsync({}).then(res => {
                    let location = res
                    accidentDetails.lat = location.coords.latitude;
                    accidentDetails.lon = location.coords.longitude;
                    axios.post('http://police-server-securityapp2.apps.openforce.openforce.biz/reports/add/accidentEvent', accidentDetails).then(() => alert("הדיווח נשלח בהצלחה"))
                  });

              break;
              case ('stabbing'):
                  Location.getCurrentPositionAsync({}).then(res => {
                    let location = res
                    stabbingDetails.lat = location.coords.latitude;
                    stabbingDetails.lon = location.coords.longitude;
                    axios.post('http://police-server-securityapp2.apps.openforce.openforce.biz/reports/add/stabbingEvent', stabbingDetails).then(() => alert("הדיווח נשלח בהצלחה"))
                  });

              break;
        }
      }}></Button>
      </View>
     
    </ImageBackground>


    
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
    width: "100%"
  },
  reportBlock : {
    width: 300,

  },  
  container: {
    flex: 1,
    alignItems: 'center',
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