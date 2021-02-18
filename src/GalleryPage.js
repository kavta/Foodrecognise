import React, { useState, useEffect, useRef } from 'react';
import { TouchableOpacity, View, Image, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Gallery from '../assets/Gallery.png';
import axios from 'axios';

const styles = StyleSheet.create({
  GalleryIcon: {
    height: 30,
    width: 30,
    marginTop: 25,
  },
});

const GalleryPage = () => {
  const [uri, setSelectImage] = useState('');
  const initial = useRef(true);

  useEffect(() => {
    if (initial.current) {
      initial.current = false;
      return;
    }
    handleImageUpload();
  }, [uri]);

  const handleImageUpload = async () => {
    const image = {
      uri,
      type: `test/jpg`,
      name: `test.jpg`,
    };

    try {
      const formData = new FormData();
      formData.append('file', image);
      formData.append('upload_preset', 'food_recognition');
      formData.append('cloud_name', 'prasanga');

      const response = await axios.post(
        'https://api.cloudinary.com/v1_1/prasanga/image/upload',
        formData
      );

      // Using GraphQL API
      const res = await axios({
        url: `https://nutritionalyzer.herokuapp.com/graphql`,
        method: 'post',
        data: {
          query: `
            query{
              predictions(imgUrl: "${response.data.url}"){
                name
              }
            }
            `,
        },
      });
      console.log(res.data);
    } catch (error) {
      console.log('Something went wrong', error);
      alert('Something went wrong');
    }
  };

  const openImagePermission = async () => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false) {
      alert('Required Permission to access media.');
      return;
    }
    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    setSelectImage(pickerResult.uri);
  };

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
