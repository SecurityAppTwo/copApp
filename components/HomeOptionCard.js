import React from 'react';
import { StyleSheet, Text, ImageBackground, Image, View} from 'react-native';

export default function HomeOptionCard({optionText, img}) {
  return (
    <View style={styles.card}>
        <ImageBackground style={styles.iconBackground}>
            <Text style={styles.iconText}>{optionText}</Text>
            <Image source={img}
                        style={styles.icon}>
            </Image>
         </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
    iconText:{ 
        fontWeight: 'bold',
        fontSize: 32,
        color: 'black',
        position: 'absolute', // childs
        bottom: 40,
        right: 25, // position where you wants
    },

    icon: {
        height: 120,
        width: 120,

    },

    iconBackground:{  
        height: 120,
        width: 340,
        backgroundColor: '#ffffff',
        borderRadius: 60,
      },

      card: {
        padding: 10
      }

});