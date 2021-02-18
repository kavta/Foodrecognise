import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
  SafeAreaView,
} from 'react-native';
import { useRoute } from '@react-navigation/native';
import AnimatedProgressWheel from 'react-native-progress-wheel';

import dummyImage from './../assets/favicon.png';
import wooden from './../assets/wooden.png';

const Display = () => {
  const route = useRoute();
  console.log(route);

  const calorie = route?.params?.nutrionvalue?.nutrients?.ENERC_KCAL || 50;
  const fat = route?.params?.nutrionvalue?.nutrients?.FAT || 40;
  // const fiber = route?.params?.nutrionvalue?.nutrients?.FIBTG || 35;
  const carbo = route?.params?.nutrionvalue?.nutrients?.CHOCDF || 20;
  const protein = route?.params?.nutrionvalue?.nutrients?.PROCNT || 15;
  const total = calorie + fat + carbo + protein;

  const styles = StyleSheet.create({
    displayImage: {
      height: 230,
      width: 230,
      alignItems: 'center',
    },
    background: {
      backgroundColor: '#ffffff',
    },
    ImageIcon: {
      zIndex: 1,
      justifyContent: 'center',
      top: 100,
      alignItems: 'center',
      position: 'relative',
      backgroundColor: '#ffffff',
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
      // height:'100%'
    },
    verticalLine: {
      height: 100,
      width: 5,
      backgroundColor: 'gray',
      position: 'relative',
    },
    nutrientsName: { fontSize: 20 },
    nutrientsChart: {
      marginLeft: 25,
      marginRight: 25,
      marginTop: 50,
      // backgroundColor: '#585858',
    },
    nutrientsChartContainer: {
      display: 'flex',
      justifyContent: 'space-evenly',
      flexWrap: 'wrap',
      paddingBottom: 60,
      flexDirection: 'row',
    },
    pageName: {
      marginLeft: 'auto',
      marginRight: 'auto',
      top: 50,
      fontSize: 30,
      // fontFamily: 'Montserrat Alternates',
      //  fontWeight: "300",
      color: '#ffffff',
      position: 'relative',
    },
    foodName: {
      fontSize: 28,
      marginTop: 85,
      textAlign: 'center',
    },
  });

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.background}>
        <ImageBackground source={wooden} style={{ resizeMode: 'cover' }}>
          <View style={{ justifyContent: 'center' }}>
            <Text style={styles.pageName}>FoodDetails</Text>
          </View>
          <View style={styles.ImageIcon}>
            <Image
              source={dummyImage}
              // source={{ uri: route?.params?.nutrionvalue?.image }}
              style={styles.displayImage}
              resizeMode="cover"
            />
          </View>

          <View style={styles.WhiteBackground}>
            <Text style={styles.foodName}>
              {route?.params?.Svalue || route?.params?.ImageName}
            </Text>

            <View style={styles.nutrientsChartContainer}>
              <View style={styles.nutrientsChart}>
                <Text style={styles.nutrientsName}>calorie</Text>
                <Text>{calorie}</Text>
                <AnimatedProgressWheel
                  size={100}
                  width={10}
                  color="yellow"
                  progress={(calorie / total) * 100}
                  backgroundColor="#e8dd8e"
                  animateFromValue={0}
                  duration={4000}
                />
              </View>
              <View style={styles.nutrientsChart}>
                <Text style={styles.nutrientsName}>Protein </Text>
                <Text>{protein}</Text>
                <AnimatedProgressWheel
                  size={100}
                  width={10}
                  color="#44734f"
                  progress={(protein / total) * 100}
                  backgroundColor="#bfdbc6"
                  animateFromValue={0}
                  duration={4000}
                />
              </View>
              {/* <View style={styles.verticalLine} /> */}
              <View style={styles.nutrientsChart}>
                <Text style={styles.nutrientsName}>Fat</Text>
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
              </View>

              {/* <View>
                <Text style={styles.nutrientsName}>Fiber</Text>
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
              </View> */}
              <View style={styles.nutrientsChart}>
                <Text style={styles.nutrientsName}>Carbo</Text>
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
          {/* </View> */}
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};

export default Display;
