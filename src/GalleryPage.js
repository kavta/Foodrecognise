import React, { useState, useEffect, useRef, Text } from 'react';

// import {useNavigation} from "@react-navigation/native"
import { TouchableOpacity, View, Image, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
// import { CommonActions } from '@react-navigation/native';
import Gallery from '../assets/Gallery.png';
import axios from 'axios';

const styles = StyleSheet.create({
  GalleryIcon: {
    height: 30,
    width: 30,
    marginTop: 25,
  },
});

const GalleryPage = ({ navigation, uri, openImagePermission }) => {
  return (
    <View style={{ alignItems: 'center' }}>
      {Boolean(uri) ? (
        <Image source={{ uri }} style={{ height: 50, width: 50 }} />
      ) : null}
      <TouchableOpacity onPress={openImagePermission}>
        <Image source={Gallery} style={styles.GalleryIcon} />
      </TouchableOpacity>
    </View>
  );
};
export default GalleryPage;
