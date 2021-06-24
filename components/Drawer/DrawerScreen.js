import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';

// Import Custom Sidebar
import CustomSidebarMenu from './CustomSidebarScreen';
import HomeScreen from '../Home/HomeScreen';
import SearchScreen from '../Search/SearchScreen';
import NotificationScreen from '../Notification/NotificationScreen';
import MessagesScreen from '../Messages/MessagesScreen';
import HomeNavigatorScreen from '../HomeNavigator/HomeNavigatorScreen';
import {Dimensions} from 'react-native';

const Drawer = createDrawerNavigator();

export default function DrawerScreen() {
  return (
    <Drawer.Navigator
      drawerContentOptions={{
        // activeTintColor: '#e91e63',
        itemStyle: {marginVertical: 5},
        activeBackgroundColor: '#5cbbff',
        activeTintColor: '#ffffff',
      }}
      drawerStyle={{width: Dimensions.get('screen').width - 30}}
      drawerContent={props => <CustomSidebarMenu {...props} />}>
      <Drawer.Screen
        name="HomeNavigatorScreen"
        component={HomeNavigatorScreen}
        options={{drawerLabel: 'First page Option'}}
      />
      {/* <Drawer.Screen
        name="HomeScreen"
        options={{drawerLabel: 'First page Option'}}
        component={HomeScreen}
      />
      <Drawer.Screen
        name="SearchScreen"
        options={{drawerLabel: 'Second page Option'}}
        component={SearchScreen}
      />
      <Drawer.Screen
        name="NotificationScreen"
        options={{drawerLabel: 'Second page Option'}}
        component={NotificationScreen}
      />
      <Drawer.Screen
        name="MessagesScreen"
        options={{drawerLabel: 'Second page Option'}}
        component={MessagesScreen}
      /> */}
    </Drawer.Navigator>
  );
}
