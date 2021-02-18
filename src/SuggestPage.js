import { useRoute } from '@react-navigation/native';
import React from 'react';
import { View, StyleSheet, ImageBackground, Text, Image } from 'react-native';
import dummyImage from './../assets/favicon.png';
import wooden from './../assets/wooden.png';

const SuggestPage = () => {
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
  });
  const route = useRoute();
  console.log(route);

  return (
    <View>
      <View style={styles.background}>
        <ImageBackground source={wooden} style={{ resizeMode: 'cover' }}>
          <View style={{ justifyContent: 'center' }}>
            <Text style={styles.pageName}>DetectedFood</Text>
          </View>
          <View style={styles.ImageIcon}>
            <Image
              source={dummyImage}
              // source={{ uri: route?.params?.nutrionvalue?.image }}
              style={styles.displayImage}
            />
          </View>

          <View style={styles.WhiteBackground}>
            <Text style={styles.foodName}>{route?.params?.ImageName}</Text>
          </View>
          <View style={{ justifyContent: 'center' }}>
            <Text style={styles.pageName}>Did you mean?</Text>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
};
export default SuggestPage;
