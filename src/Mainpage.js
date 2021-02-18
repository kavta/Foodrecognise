import React, { useState, useCallback, useRef, useEffect } from 'react';
import axios from 'axios';
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
  RefreshControl,
  SafeAreaView,
  Alert,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import * as ImagePicker from 'expo-image-picker';
import Camera from './CameraPage';
import GalleryPage from './GalleryPage';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: '#d3f589',
  },
  textBar: {
    height: 50,
    borderColor: 'black',
    borderWidth: 1,
    width: 300,
  },
  searchButton: {
    width: 80,
    height: 30,
    alignItems: 'center',
  },
  GalleryIcon: {
    height: 30,
    width: 30,
    marginTop: 25,
  },
  buttonContainer: {
    backgroundColor: '#222',
    borderRadius: 5,
    padding: 10,
    margin: 20,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
  },
});

const Mainpage = ({ navigation }) => {
  const [Svalue, setValue] = useState('');
  const [isFetching, setisFetching] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [photos, setPhotos] = useState(null);

  const wait = (timeout) => {
    return new Promise((resolve) => {
      setTimeout(resolve, timeout);
    });
  };

  const takeImage = async () => {
    let { granted } = await ImagePicker.requestCameraPermissionsAsync();
    if (granted) {
      let data = await ImagePicker.launchCameraAsync();
      console.log(data);
      setPhotos({ localuri: data.uri });
    } else {
      Alert.alert('Access denied');
    }
  };

  const [uri, setSelectImage] = useState(null);
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

      console.log(res?.data?.data?.predictions[0]);
      console.log(res?.data?.data?.predictions[1]);
      console.log(res?.data?.data?.predictions[2]);
      //   const { data } = await axios.get(
      //     `https://api.edamam.com/api/food-database/parser?app_id=358a310d&app_key=db4c503169b2e46ba80e9689f1cc3030&ingr=${ImageName}`
      //   );
      //   console.log(data?.parsed[0]?.food);
      navigation.navigate('Suggested', {
        ImageName: res?.data?.data?.predictions[0]?.name,
        ImageName1: res?.data?.data?.predictions[1]?.name,
        ImageName2: res?.data?.data?.predictions[2]?.name,
      });
    } catch (e) {
      console.log(e.message);
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

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(1000).then(() => {
      setValue('');
      setPhotos(null);
      setSelectImage(null);
      setRefreshing(false);
    });
  }, []);

  const handleChange = (e) => {
    setValue(e);
  };

  const handleSearch = async () => {
    try {
      // setisFetching(true);
      // const { data } = await axios.get(
      //   `https://api.edamam.com/api/food-database/parser?app_id=358a310d&app_key=db4c503169b2e46ba80e9689f1cc3030&ingr=${Svalue}`
      // );

      setisFetching(false);

      navigation.navigate('FoodDetails', {
        //   nutrionvalue: data?.parsed[0]?.food,
        nutrionvalue: {},
        Svalue,
      });
      //
    } catch (e) {
      console.warn(e);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={{ alignItems: 'center' }}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <TextInput
          style={styles.textBar}
          placeholder="type text"
          onChangeText={handleChange}
          value={Svalue}
        />

        <TouchableOpacity onPress={handleSearch} style={styles.searchButton}>
          <Text>SEARCH</Text>
        </TouchableOpacity>

        <Camera photos={photos} takeImage={takeImage} />

        <GalleryPage
          navigation={navigation}
          uri={uri}
          openImagePermission={openImagePermission}
        />
      </ScrollView>
    </SafeAreaView>
  );
};
export default Mainpage;
