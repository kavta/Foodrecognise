import React from 'react';
import { View, Image, TouchableOpacity, Alert } from 'react-native';
import CameraImg from '../assets/camera.png';

import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react/cjs/react.development';

const CameraPage = () => {
  const [Photoes, setPhotoes] = useState();
  const takeImage = async () => {
    // console.log("hello");
    // const { status } = await Camera.requestPermissionsAsync();
    // if (status === 'granted') {
    let { granted } = await ImagePicker.requestCameraPermissionsAsync();
    if (granted) {
      let data = await ImagePicker.launchCameraAsync();
      console.log(data);
      setPhotoes({ localuri: data.uri });
    } else {
      Alert.alert('Access denied');
    }
  };

  return (
    <View style={{ alignItems: 'center' }}>
      <TouchableOpacity onPress={takeImage}>
        <Image
          source={CameraImg}
          style={{ height: 30, width: 30, paddingTop: 20, marginTop: 25 }}
        />
      </TouchableOpacity>
      {Photoes && (
        <Image
          source={{ uri: Photoes.localuri }}
          style={{ width: 100, height: 100 }}
        />
      )}
    </View>
  );
};
export default CameraPage;
