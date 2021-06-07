import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import HomeOptionCard from './HomeOptionCard';
import { Actions } from 'react-native-router-flux';

import paraltaLogo from '../assets/jakeParalta.png';
import mapImg from '../assets/map.png';
import fingerprintImg from '../assets/fingerprint.png';
import reportImg from '../assets/report.png';


const Home = () => {
    const goToAbout = () => {
       Actions.about()
    }
    return (
       <TouchableOpacity style = {{ margin: 128 }} onPress = {goToAbout}>
          <Text>This is HOME!</Text>
       </TouchableOpacity>
    )
 }

 


const Home = () => {
  return (<View style={styles.container}>
      <Image source={paraltaLogo} style={styles.logo}></Image>
      <Text style={styles.header}>מה תרצו לעשות?</Text>
      <HomeOptionCard optionText='דיווח' img={reportImg}/>
      <HomeOptionCard optionText='זיהוי חשוד' img={fingerprintImg}/>
      <HomeOptionCard optionText='מפה' img={mapImg}/>
  </View>
  );
}

const styles = StyleSheet.create({

    container: {  
        flex: 1,
        backgroundColor: 'rgba(0, 102, 204, 0.8)',
        alignItems: 'center',
        justifyContent: 'center',
    },

    logo:{
        height: 135,
        width: 135,
        bottom: 50
    },

    header:{
        fontSize: 32,
        color:'white',
        fontWeight:'500'
    },
});

export default Home