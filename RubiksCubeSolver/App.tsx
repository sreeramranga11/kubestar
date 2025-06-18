/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import ManualInputScreen from './src/screens/ManualInputScreen';
import SolutionScreen from './src/screens/SolutionScreen';

export type RootStackParamList = {
  Home: undefined;
  ManualInput: undefined;
  Solution: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const App = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="ManualInput" component={ManualInputScreen} />
      <Stack.Screen name="Solution" component={SolutionScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;
