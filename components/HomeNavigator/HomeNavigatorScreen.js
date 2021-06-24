import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import HomeScreen from '../Home/HomeScreen';
import MessagesScreen from '../Messages/MessagesScreen';
import NotificationScreen from '../Notification/NotificationScreen';
import SearchScreen from '../Search/SearchScreen';

const Tab = createBottomTabNavigator();

export default function HomeNavigatorScreen() {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      tabBarOptions={{
        showLabel: false,
        activeTintColor: '#1DA1F2',
        style: {
          elevation: 20,
          height: 75,
          borderTopWidth: 1,
          borderTopColor:'#ababab',
        },
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color, size, focused}) =>
            focused ? (
              <MaterialCommunityIcons
                name="home"
                color={color}
                size={size + 10}
              />
            ) : (
              <MaterialCommunityIcons
                name="home-outline"
                color={color}
                size={size + 10}
              />
            ),
        }}
      />
      <Tab.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({color, size, focused}) => (
            <AntDesign name="search1" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="NotificationScreen"
        component={NotificationScreen}
        options={{
          tabBarLabel: 'Notification',
          tabBarIcon: ({color, size, focused}) =>
            focused ? (
              <MaterialCommunityIcons
                name="bell"
                color={color}
                size={size + 10}
              />
            ) : (
              <MaterialCommunityIcons
                name="bell-outline"
                color={color}
                size={size + 10}
              />
            ),
        }}
      />

      <Tab.Screen
        name="MessagesScreen"
        component={MessagesScreen}
        nav
        options={{
          tabBarLabel: 'Messages',

          tabBarIcon: ({color, size, focused}) =>
            focused ? (
              <MaterialCommunityIcons
                name="email"
                color={color}
                size={size + 10}
              />
            ) : (
              <MaterialCommunityIcons
                name="email-outline"
                color={color}
                size={size + 10}
              />
            ),
        }}
      />
    </Tab.Navigator>
  );
}
