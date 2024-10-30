import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from './pages/SplashScreen';
import SignIn from './pages/SignIn';
// import SignUp from './pages/SignUp'; // When you create this
// import MainApp from './pages/MainApp'; // When you create this

export type RootStackParamList = {
  SplashScreen: undefined;
  SignIn: undefined;
  SignUp: undefined;
  MainApp: undefined;
  // Add other screens as needed
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="SignIn" component={SignIn} />
        {/* Add these screens when you create them */}
        {/* <Stack.Screen name="SignUp" component={SignUp} /> */}
        {/* <Stack.Screen name="MainApp" component={MainApp} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;