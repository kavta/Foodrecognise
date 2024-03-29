import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Mainpage from './src/Mainpage';
import Display from './src/Display';

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Nutritionalyzer " component={Mainpage} />
        {/* <View style={styles.container}> */}
        <Stack.Screen name="FoodDetails"  component={Display} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c6f266',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
