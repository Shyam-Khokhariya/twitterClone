import React, {useEffect, useRef, useState} from 'react';
import {Animated, View, StatusBar, StyleSheet} from 'react-native';
import MaskedView from '@react-native-community/masked-view';
import auth from '@react-native-firebase/auth';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {getUser} from '../../redux/actions/actionCreator';

function SplashScreen(props) {
  const {navigation, user, getUser} = props;

  const loadingProgress = useRef(new Animated.Value(0)).current;
  const [animationDone, setanimationDone] = useState(false);

  useEffect(() => {
    let redirectTo;
    const subscriber = auth().onAuthStateChanged(user_data => {
      if (user_data) {
        getUser(user_data.uid);
        console.log("user_data",user_data)
        console.log("user",user)
        if (user !== null) {
          redirectTo = 'DashboardScreen';
        } else {
          redirectTo = 'LoginSignupScreen';
        }
      }
    });
    setTimeout(() => {
      navigation.reset({
        index: 0,
        routes: [{name: 'DrawerScreen'}],
      });
      // if (!redirectTo) {
      //   navigation.reset({
      //     index: 0,
      //     routes: [{name: 'LoginSignupScreen'}],
      //   });
      // } else {
      //   navigation.reset({
      //     index: 0,
      //     routes: [{name: redirectTo}],
      //   });
      // }
    }, 200);

    Animated.timing(loadingProgress, {
      toValue: 100,
      duration: 1500,
      useNativeDriver: true, // This is important!
    }).start(() => {
      setanimationDone(true);
    });

    return subscriber; // unsubscribe on unmount
  }, []);

  const imageScale = {
    transform: [
      {
        scale: loadingProgress.interpolate({
          inputRange: [0, 10, 100],
          outputRange: [1, 0.8, 70],
        }),
      },
    ],
  };

  return (
    <View style={styles.mainContainer}>
      <StatusBar backgroundColor={'#1DA1F2'} />
      {animationDone ? null : <View style={styles.blueScreen} />}
      <MaskedView
        style={{flex: 1}}
        maskElement={
          <View style={styles.maskingView}>
            <Animated.Image
              style={[{height: 100, width: 100}, imageScale]}
              source={require('../assets/images/logo1.png')}
            />
          </View>
        }>
        {animationDone ? null : (
          <View style={styles.middleLayerView}>
            <View style={[styles.backView, {backgroundColor: '#fff'}]} />
          </View>
        )}
      </MaskedView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  blueScreen: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: '#1DA1F2',
    right: 0,
    bottom: 0,
  },
  maskingView: {
    backgroundColor: 'transparent',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  middleLayerView: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    flexDirection: 'row',
    height: '100%',
  },
  backView: {
    flex: 1,
    height: '100%',
  },
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({getUser}, dispatch);
};

const mapStateToProps = state => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SplashScreen);
