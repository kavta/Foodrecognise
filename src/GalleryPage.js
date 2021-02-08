import React, { useState } from "react";
import { TouchableOpacity, View, Image, StyleSheet } from "react-native";
import * as ImagePicker from "expo-image-picker";
import Gallery from "../assets/Gallery.png";

const styles = StyleSheet.create({
  GalleryIcon: {
    height: 30,
    width: 30,
    marginTop: 25,
  },
});

const GalleryPage = () => {
  const [selectImage, setSelectImage] = useState();
  const openImagePermission = async () => {
    let permissionResult = await ImagePicker.requestCameraPermissionsAsync();
    if (permissionResult.granted === false) {
      alert("Required Permission to access camera.");
      return;
    }
    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    setSelectImage({ localuri: pickerResult.uri });
   return(
   <View>
      <Image
        source={{ uri: selectImage.localuri }}
        style={{ height: 50, width: 50 }}
      />
    </View>
   )
   
  };

  return (
    <View>
      <TouchableOpacity onPress={openImagePermission}>
        <Image source={Gallery} style={styles.GalleryIcon} />
      </TouchableOpacity>
    </View>
  );
};
export default GalleryPage;
