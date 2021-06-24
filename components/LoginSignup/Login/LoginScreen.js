import React, {useState} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  ToastAndroid,
  View,
} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import Entypo from 'react-native-vector-icons/Entypo';
import auth from '@react-native-firebase/auth';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {
  updateEmail,
  updatePassword,
  login,
} from '../../../redux/actions/actionCreator';
import {useForm, Controller} from 'react-hook-form';

// import Firebase from "../../../config/Firebase";

function LoginScreen(props) {
  const {updatePassword, updateEmail, login, navigation, user} = props;

  const {control, handleSubmit, errors} = useForm();
  const onSubmit = async data => {
    console.log(data);
    const res1 = await updateUser(data);
    const res = await login();
    navigation.navigate('SplashScreen');
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <StatusBar barStyle={'dark-content'} backgroundColor="#fff" />
        <ScrollView style={{flex: 1}}>
          <View style={styles.backButtonView}>
            <Entypo
              name="chevron-left"
              size={32}
              color="#1DA1F2"
              style={styles.backIcon}
              onPress={() => navigation.goBack()}
            />
          </View>
          <View style={styles.topLogo}>
            <Image
              style={styles.logo}
              source={require('../../assets/images/logo1.png')}
            />
          </View>
          <View style={styles.centerView}>
            <View style={styles.createView}>
              <Text style={styles.createText} numberOfLines={1}>
                Log in to Twitter
              </Text>
            </View>
            <View style={styles.inputs}>
              <Controller
                control={control}
                render={({onChange, onBlur, value}) => (
                  <View style={styles.inputContainer}>
                    <TextInput
                      placeholder="Email address"
                      onBlur={onBlur}
                      onChangeText={value => onChange(value)}
                      value={value}
                      style={styles.inputbox}
                    />
                  </View>
                )}
                name="email"
                rules={{
                  required: {value: true, message: 'Email is required'},
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address',
                  },
                }}
                defaultValue=""
              />
              {errors.email && (
                <View style={styles.errorView}>
                  <Text style={styles.errorText}>*{errors.email.message}</Text>
                </View>
              )}

              <Controller
                control={control}
                render={({onChange, onBlur, value}) => (
                  <View style={styles.inputContainer}>
                    <TextInput
                      secureTextEntry={true}
                      placeholder="Password"
                      style={styles.inputbox}
                      onBlur={onBlur}
                      onChangeText={value => onChange(value)}
                      value={value}
                    />
                  </View>
                )}
                name="password"
                rules={{
                  required: {value: true, message: 'Password is required'},
                  minLength: {
                    value: 6,
                    message: 'Minimum 6 character required',
                  },
                }}
                defaultValue=""
              />
              {errors.password && (
                <View style={styles.errorView}>
                  <Text style={styles.errorText}>
                    *{errors.password.message}
                  </Text>
                </View>
              )}
            </View>
          </View>
        </ScrollView>
        <View style={styles.footerView}>
          <TouchableOpacity
            style={styles.footerButton}
            onPress={handleSubmit(onSubmit)}>
            <View style={styles.footerButtonView}>
              <Text style={styles.footerButtonText}>Log in</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.forgotButtonView}>
            <Text style={styles.forgotButtonText}>Forgot password?</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  backButtonView: {
    position: 'absolute',
    top: 10,
    left: 10,
  },
  topLogo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    height: 50,
    width: 50,
  },
  centerView: {
    flex: 1,
    marginTop: 40,
  },
  createView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  createText: {
    fontWeight: '700',
    fontSize: 26,
    textAlign: 'center',
  },
  inputs: {
    marginTop: 30,
  },
  inputContainer: {
    marginHorizontal: 30,
    marginVertical: 12,
    paddingBottom: 10,
    borderBottomColor: 'grey',
    borderBottomWidth: 0.5,
  },
  inputbox: {
    fontSize: 18,
    color: '#1DA1F2',
  },
  errorView: {
    flexDirection: 'row',
    marginTop: -5,
    marginBottom: 10,
    marginHorizontal: 20,
  },
  errorText: {
    flex: 1,
    paddingRight: 10,
    paddingLeft: 10,
    fontSize: 16,
    color: '#fc441d',
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
  forgotButtonText: {
    color: '#1DA1F2',
    fontSize: 16,
  },
  footerView: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 15,
    // borderTopColor: 'grey',
    // borderTopWidth: 1,
    // flex: 1,
    // position: 'absolute',
    // // top:0,
    // right: 0,
    // bottom: 0,
    // left: 0,
    // left:0,
  },
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({updateEmail, updatePassword, login}, dispatch);
};

const mapStateToProps = state => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
