import React from "react";
import { View, Text } from "react-native";
import { useRoute } from "@react-navigation/native";
import AnimatedProgressWheel from "react-native-progress-wheel";

const Display = () => {
  const route = useRoute();
  // console.log(route);
  // console.warn(route);
  const calorie = route?.params?.nutrionvalue?.calories;
  const Fat = route?.params?.nutrionvalue?.fat_total_g;
  const fiber = route?.params?.nutrionvalue?.fiber_g;
  const carbo = route?.params?.nutrionvalue?.carbohydrates_total_g;
  const protein = route?.params?.nutrionvalue?.protein_g;

  return (
    <View>
      <View style={{ flex: 1, alignItems: "center" }}>
        <Text>{route?.params?.Svalue} calorie</Text>
        <Text>{calorie}</Text>
        <AnimatedProgressWheel
          size={100}
          width={10}
          color={"yellow"}
          progress={calorie}
          backgroundColor={"white"}
        />
      </View>
      <View>
        <Text>Protein </Text>
        <AnimatedProgressWheel
          size={100}
          width={10}
          color={"blue"}
          progress={protein}
          backgroundColor={"white"}
        />
        <Text>Fat</Text>
        <AnimatedProgressWheel
          size={100}
          width={10}
          color={"blue"}
          progress={Fat}
          backgroundColor={"white"}
        />
        <Text>Fiber</Text>
        <AnimatedProgressWheel
          size={100}
          width={10}
          color={"blue"}
          progress={fiber}
          backgroundColor={"white"}
        />
         <Text>Carbohydtare</Text>
        <AnimatedProgressWheel
          size={100}
          width={10}
          color={"blue"}
          progress={carbo}
          backgroundColor={"white"}
        />
      </View>
    </View>
  );
};

export default Display;
