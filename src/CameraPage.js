import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';

import CameraImg from '../assets/camera.png';

const CameraPage = ({ takeImage, photos }) => {
  return (
    <View style={{ alignItems: 'center' }}>
      <TouchableOpacity onPress={takeImage}>
        <Image
          source={CameraImg}
          style={{ height: 30, width: 30, paddingTop: 20, marginTop: 25 }}
        />
      </TouchableOpacity>

      {photos ? (
        <Image
          source={{ uri: photos.localuri }}
          style={{ width: 100, height: 100 }}
        />
      ) : null}
    </View>
  );
};

export default CameraPage;
