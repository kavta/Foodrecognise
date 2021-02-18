import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Mainpage from './src/Mainpage';
import Display from './src/Display';
import GalleryPage from './src/GalleryPage';
import SuggestPage from './src/SuggestPage';

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Nutritionalyzer">
        <Stack.Screen name="Nutritionalyzer" component={Mainpage} />
        {/* <Stack.Screen name="GalleryPage" component={GalleryPage} /> */}
        <Stack.Screen
          name="Suggested"
          component={SuggestPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="FoodDetails"
          component={Display}
          options={{ headerShown: false }}
        />
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
