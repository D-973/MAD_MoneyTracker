import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SplashScreen from './src/pages/SplashScreen';
import SignIn from './src/pages/Sign In';
import SignUp from './src/pages/Sign Up';
import Home from './src/pages/Home';
import COH from './src/pages/COH';
import COB from './src/pages/COB';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FlashMessage from 'react-native-flash-message';
import './src/config/Firebase';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="COH"
          component={COH}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="COB"
          component={COB}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
      <FlashMessage position="top" />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
