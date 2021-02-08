import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
} from "react-native";
import CameraPage from "./CameraPage";
import GalleryPage from "./GalleryPage";
import Display from "./Display";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

const Mainpage = ({navigation}) => {
  const [Svalue, setValue] = useState("");
  const [isFetching, setisFetching] = useState(false);

  const handleChange = (e) => {
    setValue(e);
  };

  const handleSearch = async () => {
    try {
      setisFetching(true);
      const { data } = await axios.get(
        `https://api.calorieninjas.com/v1/nutrition?query=${Svalue}`,
        { headers: { "X-Api-Key": "9gmrTUibNnKbEy+jt9KkKQ==CCHBqccy4kKslTPV" } }

        // `https://api.edamam.com/api/food-database/parser?app_id=358a310d&app_key=db4c503169b2e46ba80e9689f1cc3030&ingr=${Svalue}`
      );
      setisFetching(false);
      console.log(data);
      navigation.navigate('DisplayPage', { nutrionvalue: data?.items[0], Svalue } );
    } catch (e) {
      console.warn(e);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={{fontSize:40}}>FOODCALO</Text>
      
      <TextInput
        style={{ height: 50, borderColor: "black", borderWidth: 1, width: 300 }}
        placeholder="type text"
        onChangeText={handleChange}
        value={Svalue}
      />

      <TouchableOpacity onPress={handleSearch} style={{width: 80, height: 30}}>
        <Text>SEARCH</Text>
      </TouchableOpacity>
    
      <CameraPage/>
      
      <GalleryPage/>
    </View>
  );
};
export default Mainpage;
