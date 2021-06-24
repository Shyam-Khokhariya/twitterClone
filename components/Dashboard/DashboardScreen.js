import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {logout} from '../../redux/actions/actionCreator';

function DashboardScreen(props) {
  const {navigation, user, logout} = props;

  const handleLogout = () => {
    logout();
    navigation.navigate('SplashScreen');
  };

  return (
    <View style={styles.loginContainer}>
      <ScrollView style={{flex: 1}}>
        <StatusBar barStyle="light-content" backgroundColor="#2D2C3C" />
        <View style={styles.imageContainer}>
          <Image
            style={styles.logoImage}
            source={require('../assets/images/logo1.png')}
          />
        </View>
        <View style={styles.welcomeContainer}>
          <View>
            <Text style={styles.welcome}>Hello {user.email}</Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.footerButton}
          onPress={() => {
            handleLogout();
            // navigation.navigate("LoginScreen");
          }}>
          <View style={styles.footerButtonView}>
            <Text style={styles.footerButtonText}>Logout</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },

  imageContainer: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
  },
  welcomeContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  footerButton: {
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  footerButtonView: {
    backgroundColor: '#1DA1F2',
    borderRadius: 50,
  },
  footerButtonText: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    color: '#fff',
    fontSize: 14,
  },
  logoImage: {
    height: 200,
    width: Dimensions.get('window').width,
    // flex:1,
    resizeMode: 'contain',
  },
  welcome: {
    // fontWeight: 'bold',
    fontFamily: 'Poppins-Medium',
    fontSize: 20,
  },
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({logout}, dispatch);
};

const mapStateToProps = state => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardScreen);
