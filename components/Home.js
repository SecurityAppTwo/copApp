import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

import HomeOptionCard from './HomeOptionCard';

import paraltaLogo from '../assets/jakeParalta.png';
import mapImg from '../assets/map.png';
import fingerprintImg from '../assets/fingerprint.png';
import reportImg from '../assets/report.png';
// import Navbar from './Navbar';

const Home = ({navigation}) => {
    const gotToReport = () => {
        navigation.navigate('Report')
    }

    const gotToIdentification = () => {
        navigation.navigate('Identification')
    }

    const goToMap = () => {
        navigation.navigate('Map')
    }

return(
  <View style={styles.container}>
    <Image source={paraltaLogo} style={styles.logo}></Image>
    <Text style={styles.header}>מה תרצו לעשות?</Text>

    <TouchableOpacity onPress = {gotToReport}>
        <HomeOptionCard optionText='דיווח' img={reportImg}/>
    </TouchableOpacity>

    <TouchableOpacity onPress = {gotToIdentification}>
        <HomeOptionCard optionText='זיהוי חשוד' img={fingerprintImg}/>
    </TouchableOpacity>

    <TouchableOpacity onPress = {goToMap}>
        <HomeOptionCard optionText='מפה' img={mapImg}/>
    </TouchableOpacity>

    {/* <Navbar></Navbar> */}
  </View>)
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