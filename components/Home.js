import React from 'react';
import { StyleSheet, Text, View , Image, ImageBackground, Button, Icon} from 'react-native';
import HomeOptionCard from './HomeOptionCard';
import { color } from 'react-native-elements/dist/helpers';


export default function Home() {
  return (<View style={styles.container}>
      <Text style={styles.header}>מה תרצו לעשות?</Text>
      <HomeOptionCard optionText='מפה' imagePath='map'/>
      <HomeOptionCard optionText='דיווח' imagePath='report'/>
      <HomeOptionCard optionText='זיהוי חשוד' imagePath='fingerprint'/>
  </View>
        /* <View style={{flexDirection : 'row'}}>
            { <Text style={styles.iconText}>מפה</Text>
            <Image source={require('../assets/map.png')}
                style={styles.icon} />
        
            <Text style={styles.iconText}>זיהוי חשוד</Text>
            <Image source={require('../assets/fingerprint.png')}
                style={styles.icon} /> }

            <ImageBackground
                source={require('../assets/map.png')}
                style={styles.icon}>
            <Text style={styles.iconText}>מפה</Text>
            </ImageBackground>

                
            <ImageBackground
                source={require('../assets/fingerprint.png')}
                style={styles.icon}>
            <Text style={styles.iconText}>זיהוי חשוד</Text>
            </ImageBackground>


        </View>
        
        <Text style={styles.iconText}>דיווח</Text>
        <Image source={require('../assets/report.png')}
            style={styles.icon} /> */
  );
}

const styles = StyleSheet.create({

    container: {  
        flex: 1,
        backgroundColor: 'rgba(0, 102, 204, 0.8)',
        alignItems: 'center',
        justifyContent: 'center',
    },

    header:{
        fontSize:32,
        color:'white',
        fontWeight:'500'
    },
});