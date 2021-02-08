import React from "react";
import { View,Image, Touchable, TouchableOpacity } from "react-native";
import CameraImg from "../assets/camera.png";
const CameraPage =()=> 
{

return(
<View>
<TouchableOpacity>
<Image source={CameraImg} style={{height:30,width:30, paddingTop:20,marginTop:25}} />
</TouchableOpacity>


</View>
);

};
export default CameraPage;

