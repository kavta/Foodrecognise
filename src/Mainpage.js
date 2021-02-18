import React, { useState, useCallback } from 'react';
import axios from 'axios';
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
  RefreshControl,
  SafeAreaView,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import ImageSlider from 'react-native-image-slider';
import CameraPage from './CameraPage';
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
});

const Mainpage = ({ navigation }) => {
  const [Svalue, setValue] = useState('');
  const [isFetching, setisFetching] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const wait = (timeout) => {
    return new Promise((resolve) => {
      setTimeout(resolve, timeout);
    });
  };
  // const images = [];

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(1000).then(() => {
      setRefreshing(false);
      setValue('');
    });
  }, []);

  const handleChange = (e) => {
    setValue(e);
  };

  const handleSearch = async () => {
    try {
      setisFetching(true);
      const { data } = await axios.get(
        `https://api.edamam.com/api/food-database/parser?app_id=358a310d&app_key=db4c503169b2e46ba80e9689f1cc3030&ingr=${Svalue}`
      );

      setisFetching(false);
      // console.log(data);

      navigation.navigate('FoodDetails', {
        nutrionvalue: data?.parsed[0]?.food,
        // nutrionvalue: {}, // <<
        Svalue,
      });
      // navigation.navigate('DisplayPage', { nutrionvalue: data?.items[0], Svalue } );
    } catch (e) {
      console.warn(e);
    }
  };

  return (
    // <View style={styles.container}>
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={{ alignItems: 'center' }}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <Text style={{ fontSize: 40 }}>Nutritionalyzer</Text>

        <TextInput
          style={styles.textBar}
          placeholder="type text"
          onChangeText={handleChange}
          value={Svalue}
        />

        <TouchableOpacity onPress={handleSearch} style={styles.searchButton}>
          <Text>SEARCH</Text>
        </TouchableOpacity>
        <CameraPage />

        <GalleryPage />
      </ScrollView>
    </SafeAreaView>
    // </View>
  );
};
export default Mainpage;
