import React, {useState} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

// import Firebase from "../../../config/Firebase";

function NotificationScreen(props) {
  const {navigation} = props;

  const toggleDrawer = () => {
    //Props to open/close the drawer
    navigation.toggleDrawer();
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <StatusBar barStyle={'dark-content'} backgroundColor="#fff" />
        <ScrollView style={{flex: 1}}>
          <View style={styles.topIcons}>
            <View style={styles.backButtonView}>
              <Entypo
                name="menu"
                size={32}
                color="#1DA1F2"
                style={styles.backIcon}
                onPress={toggleDrawer}
              />
            </View>
            <View style={styles.topLogo}>
              <Image
                style={styles.logo}
                source={require('../assets/images/logo1.png')}
              />
            </View>
            <View style={styles.starButtonView}>
              <Image
                source={require('../assets/images/star.png')}
                style={styles.logo}
              />
            </View>
          </View>
          <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
            <Text>Notification Screen</Text>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  topIcons: {
    marginHorizontal: 15,
    marginVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  topLogo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    marginTop: 3,
    height: 40,
    width: 40,
  },
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({}, dispatch);
};

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(NotificationScreen);
