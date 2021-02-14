import React from 'react';
import { View, Text, Image, StyleSheet, ImageBackground } from 'react-native';
import { useRoute } from '@react-navigation/native';
import AnimatedProgressWheel from 'react-native-progress-wheel';
import dummyImage from './../assets/favicon.png';
import wooden from './../assets/wooden.jpg';

const Display = () => {
  const route = useRoute();
  console.log(route);
  // console.warn(route);
  const calorie = route?.params?.nutrionvalue?.nutrients?.ENERC_KCAL ;
  const fat = route?.params?.nutrionvalue?.nutrients?.FAT;
  const fiber = route?.params?.nutrionvalue?.nutrients?.FIBTG ;
  const carbo = route?.params?.nutrionvalue?.nutrients?.CHOCDF ;
  const protein = route?.params?.nutrionvalue?.nutrients?.PROCNT ;
  const total = calorie + fat + fiber + carbo + protein;

  const styles = StyleSheet.create({
    displayImage: {
      height: 230,
      width: 230,
      alignItems: 'center',
    },
    background: {
      // position: 'relative',
      // width: '100%',
      backgroundColor: '#ffffff',
    },
    ImageIcon: {
      zIndex: 1,
      justifyContent: 'center',
      top: 100,
      alignItems: 'center',
      position: 'relative',
      borderColor: '#ffffff',
      borderRadius: 125,
      overflow: 'hidden',
      height: 250,
      width: 250,
      marginLeft: 'auto',
      marginRight: 'auto',
      borderWidth: 10,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.51,
      shadowRadius: 13.16,

      elevation: 2,
    },
    WhiteBackground: {
      backgroundColor: '#ffffff',
      borderRadius: 35,
      top: 5,

      width: '100%',
      padding: 14,
    },
  });
  // console.warn(total);
  return (
    <View style={styles.background}>
      <ImageBackground source={wooden} style={{ resizeMode: 'cover' }}>
        <View style={styles.ImageIcon}>
          <Image
            // source={dummyImage}
            source={{ uri: route?.params?.nutrionvalue?.image }}
            style={styles.displayImage}
          />
        </View>
        <Text>{route?.params?.Svalue} </Text>

        <View style={styles.WhiteBackground}>
          <View>
            <View style={{ flex: 1, alignItems: 'center' }}>
              <Text>calorie</Text>
              <Text>{calorie}</Text>
              <AnimatedProgressWheel
                size={100}
                width={10}
                color="yellow"
                progress={(calorie / total) * 100}
                backgroundColor="white"
                animateFromValue={0}
                duration={4000}
              />
            </View>
            <View>
              <Text>Protein </Text>
              <Text>{protein}</Text>
              <AnimatedProgressWheel
                size={100}
                width={10}
                color="blue"
                progress={(protein / total) * 100}
                backgroundColor="white"
                animateFromValue={0}
                duration={4000}
              />
              <Text>Fat</Text>
              <Text>{fat}</Text>
              <AnimatedProgressWheel
                size={100}
                width={10}
                color="blue"
                progress={(fat / total) * 100}
                backgroundColor="white"
                animateFromValue={0}
                duration={4000}
              />
              <Text>Fiber</Text>
              <Text>{fiber}</Text>
              <AnimatedProgressWheel
                size={100}
                width={10}
                color="blue"
                progress={(fiber / total) * 100}
                backgroundColor="white"
                animateFromValue={0}
                duration={4000}
              />
              <Text>Carbohydtare</Text>
              <Text>{carbo}</Text>
              <AnimatedProgressWheel
                size={100}
                width={10}
                color="blue"
                progress={(carbo / total) * 100}
                backgroundColor="white"
                animateFromValue={0}
                duration={4000}
              />
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Display;
