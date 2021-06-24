import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import SplashScreen from '../components/Splash/SplashScreen';
import LoginSignupScreen from '../components/LoginSignup/LoginSignupScreen';
import SignupScreen from '../components/LoginSignup/Signup/SignupScreen';
import LoginScreen from '../components/LoginSignup/Login/LoginScreen';
import HomeNavigatorScreen from '../components/HomeNavigator/HomeNavigatorScreen';
import DrawerScreen from '../components/Drawer/DrawerScreen';

const RootStack = createStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="SplashScreen">
        <RootStack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <RootStack.Screen
          name="LoginSignupScreen"
          component={LoginSignupScreen}
          options={{headerShown: false}}
        />
        <RootStack.Screen
          name="SignupScreen"
          component={SignupScreen}
          options={{headerShown: false}}
        />
        <RootStack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <RootStack.Screen
          name="DrawerScreen"
          component={DrawerScreen}
          options={{headerShown: false}}
        />
        <RootStack.Screen
          name="HomeNavigatorScreen"
          component={HomeNavigatorScreen}
          options={{headerShown: false}}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
