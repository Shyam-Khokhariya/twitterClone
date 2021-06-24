import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Text,
  Linking,
  TouchableOpacity,
} from 'react-native';

import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import HomeScreen from '../Home/HomeScreen';
import {NavigationActions} from 'react-navigation';

const activeIconColor = '#fff';
const inactiveIconColor = '#1DA1F2';
const activeTextColor = '#fff';
const inactiveTextColor = '#000';

export default function CustomSidebarScreen(props) {
  const {navigation, state} = props;

  let activeIndex = state.index;
  let activeRouteValue = state.routes[activeIndex];

  console.log('active--------', activeIndex, JSON.stringify(activeRouteValue));

  const [activeRoute, setActiveRoute] = useState('');

  useEffect(() => {
    if (activeRouteValue.state) {
      let index = activeRouteValue.state.index;
      console.log('in useeffect', activeRouteValue.state.routes[index].name);
      setActiveRoute(activeRouteValue.state.routes[index].name);
    } else {
      console.log('in useeffect else', activeRouteValue.name);
      setActiveRoute(activeRouteValue.name);
    }
  }, [activeRouteValue, activeRoute]);

  const navigateToScreen = route => {
    console.log('in navigate to screen');
    if (activeRouteValue === route) {
      return navigation.closeDrawer();
    }

    // setActiveRoute(route)

    navigation.navigate(route);

    // const navAction = NavigationActions.navigate({
    //   routeName: route,
    // });

    // navigation.dispatch(navAction);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.profileContainer}>
        <Image
          source={require('../assets/images/musicList_1.png')}
          style={styles.sideMenuProfileIcon}
        />
        <View>
          <Text style={styles.profileName}>Shyam Khokhariya</Text>
          <Text style={styles.profileDesignation}>Developer</Text>
        </View>
      </View>
      <View style={{flex: 1, flexDirection: 'row'}}>
        <View
          style={{
            flex: 6,
            marginTop: 60,
            justifyContent: 'center',
            // marginLeft: 20,
          }}>
          <DrawerContentScrollView {...props}>
            {/* <DrawerItemList {...props} /> */}
            {/* <DrawerItem
            activeTintColor="#ffffff"
            activeBackgroundColor="#000"
              icon={({color, size, focused}) =>
                focused ? (
                  <MaterialCommunityIcons
                    name="home"
                    color={color}
                    size={size + 10}
                  />
                ) : (
                  <MaterialCommunityIcons
                    style={styles.itemIcon}
                    name="home-outline"
                    color={color}
                    size={size + 10}
                  />
                )
              }
              label="Home123"
              // component={HomeScreen}
              onPress={() => console.log("Home clicked")}
            /> */}
            <TouchableOpacity onPress={() => navigateToScreen('HomeScreen')}>
              <View
                style={[
                  styles.customItem,
                  activeRoute === 'HomeScreen' ||
                  activeRoute === 'HomeNavigatorScreen'
                    ? styles.activeTab
                    : {},
                ]}>
                <MaterialCommunityIcons
                  style={styles.itemIcon}
                  name="home-outline"
                  color={
                    activeRoute === 'HomeScreen' ||
                    activeRoute === 'HomeNavigatorScreen'
                      ? activeIconColor
                      : inactiveIconColor
                  }
                  size={28}
                />
                <Text
                  style={[
                    styles.itemText,
                    activeRoute === 'HomeScreen' ||
                    activeRoute === 'HomeNavigatorScreen'
                      ? {color: activeTextColor}
                      : {color: inactiveTextColor},
                  ]}>
                  Home
                </Text>
              </View>
            </TouchableOpacity>
            {/* </DrawerItem> */}
            <TouchableOpacity onPress={() => navigateToScreen('SearchScreen')}>
              <View
                style={[
                  styles.customItem,
                  activeRoute === 'SearchScreen' ? styles.activeTab : {},
                ]}>
                <AntDesign
                  style={styles.itemIcon}
                  name="search1"
                  color={
                    activeRoute === 'SearchScreen'
                      ? activeIconColor
                      : inactiveIconColor
                  }
                  size={28}
                />
                {/* <MaterialCommunityIcons
              name="home-outline"
              color="#1DA1F2"
              size={28}
            /> */}
                <Text
                  style={[
                    styles.itemText,
                    activeRoute === 'SearchScreen'
                      ? {color: activeTextColor}
                      : {color: inactiveTextColor},
                  ]}>
                  Search
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigateToScreen('NotificationScreen')}>
              <View
                style={[
                  styles.customItem,
                  activeRoute === 'NotificationScreen' ? styles.activeTab : {},
                ]}>
                <MaterialCommunityIcons
                  style={styles.itemIcon}
                  name="bell-outline"
                  color={
                    activeRoute === 'NotificationScreen'
                      ? activeIconColor
                      : inactiveIconColor
                  }
                  size={28}
                />
                <Text
                  style={[
                    styles.itemText,
                    activeRoute === 'NotificationScreen'
                      ? {color: activeTextColor}
                      : {color: inactiveTextColor},
                  ]}>
                  Notification
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigateToScreen('MessagesScreen')}>
              <View
                style={[
                  styles.customItem,
                  activeRoute === 'MessagesScreen' ? styles.activeTab : {},
                ]}>
                <MaterialCommunityIcons
                  style={styles.itemIcon}
                  name="email-outline"
                  color={
                    activeRoute === 'MessagesScreen'
                      ? activeIconColor
                      : inactiveIconColor
                  }
                  size={28}
                />
                <Text
                  style={[
                    styles.itemText,
                    activeRoute === 'MessagesScreen'
                      ? {color: activeTextColor}
                      : {color: inactiveTextColor},
                  ]}>
                  Messages
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={styles.customItem}>
                <AntDesign
                  style={styles.itemIcon}
                  name="setting"
                  color="#1DA1F2"
                  size={28}
                />
                <Text style={styles.itemText}>Setting</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={styles.customItem}>
                <MaterialCommunityIcons
                  style={styles.itemIcon}
                  name="power"
                  color="#1DA1F2"
                  size={28}
                />
                <Text style={styles.itemText}>Logout</Text>
              </View>
            </TouchableOpacity>
          </DrawerContentScrollView>
        </View>
        <View
          opacity={0.7}
          style={{
            flex: 0.5,
            backgroundColor: '#121212',
            borderColor: '#fff',
            borderWidth: 1,
            marginTop: 40,
            marginBottom: 140,
            borderTopLeftRadius: 20,
            borderBottomLeftRadius: 20,
          }}>
          <Image
            source={require('../assets/images/notificationScreen.png')}
            style={{
              flex: 2.5,
              // flexDirection:'row',
              // justifyContent: 'flex-start',
              // alignItems: 'flex-start',
              resizeMode: 'cover',
              // height: '600%',
              width: '100%',
            }}
          />
        </View>
        <View
          opacity={0.8}
          style={{
            flex: 0.7,
            backgroundColor: '#121212',
            borderColor: '#fff',
            borderWidth: 1,
            marginTop: 20,
            marginBottom: 130,
            borderTopLeftRadius: 20,
            borderBottomLeftRadius: 20,
          }}>
          <Image
            source={require('../assets/images/searchScreen.png')}
            style={{
              flex: 2.5,
              // flexDirection:'row',
              // justifyContent: 'flex-start',
              // alignItems: 'flex-start',
              resizeMode: 'cover',
              // height: '600%',
              width: '100%',
            }}
          />
        </View>
        <View
          opacity={0.9}
          removeClippedSubviews={true}
          style={{
            flex: 2.8,
            backgroundColor: '#121212',
            borderColor: '#fff',
            borderWidth: 1,
            marginBottom: 120,
            borderTopLeftRadius: 20,
            borderBottomLeftRadius: 20,
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
          }}>
          <Image
            source={require('../assets/images/homeScreen.png')}
            style={{
              flex: 1,
              // flexDirection:'row',
              // justifyContent: 'flex-start',
              // alignItems: 'flex-start',
              resizeMode: 'cover',
              // height: '600%',
              width: '100%',
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sideMenuProfileIcon: {
    resizeMode: 'contain',
    width: 70,
    height: 70,
    borderRadius: 10,
    alignSelf: 'center',
  },
  activeTab: {
    backgroundColor: '#1DA1F2',
    borderTopRightRadius: 400,
    borderBottomRightRadius: 400,
    marginRight:10
  },
  profileContainer: {
    flexDirection: 'row',
    margin: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileName: {
    fontWeight: '900',
    fontSize: 28,
    paddingHorizontal: 10,
  },
  profileDesignation: {
    fontWeight: '400',
    fontSize: 16,
    paddingHorizontal: 10,
  },
  iconStyle: {
    width: 15,
    height: 15,
    marginHorizontal: 5,
  },
  customItem: {
    flex: 1,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemIcon: {
    marginHorizontal: 10,
  },
  itemText: {
    fontSize: 16,
    fontWeight: '900',
  },
});
