import React, {useState} from 'react';
import {
  Image,
  Keyboard,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import moment from 'moment';
import DatePicker from 'react-native-date-picker';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import auth from '@react-native-firebase/auth';
import {updateUser, signup} from '../../../redux/actions/actionCreator';
import {useForm, Controller} from 'react-hook-form';

function SignupScreen(props) {
  const {
    updateEmail,
    updatePassword,
    updateUser,
    signup,
    navigation,
    user,
  } = props;

  const {control, handleSubmit, errors} = useForm();
  const onSubmit = async data => {
    let d = {...data, birth_date: date};
    console.log(d);
    const res1 = await updateUser(d);
    const res = await signup();
    navigation.navigate('SplashScreen');
  };

  const [userName, setUserName] = useState();
  const [showDate, setShowDate] = useState(false);
  const [date, setDate] = useState();
  const [phoneType, setPhoneType] = useState();
  const [phoneEdit, setPhoneEdit] = useState();

  const handleSignUp = async () => {
    const res = await signup();
    navigation.navigate('SplashScreen');
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <StatusBar barStyle={'dark-content'} backgroundColor="#fff" />
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
        <ScrollView style={{flex: 1}}>
          <TouchableOpacity
            style={{flex: 1}}
            activeOpacity={1}
            accessible={false}
            onPress={() => {
              Keyboard.dismiss();
              setShowDate(false);
            }}>
            <View style={styles.centerView}>
              <View style={styles.createView}>
                <Text style={styles.createText}>Create your account</Text>
              </View>
              <View style={styles.inputs}>
                <Controller
                  control={control}
                  render={({onChange, onBlur, value}) => (
                    <View style={styles.inputContainer}>
                      <TextInput
                        placeholder="Name"
                        style={styles.inputbox}
                        onBlur={onBlur}
                        onChangeText={value => onChange(value)}
                        value={value}
                        onFocus={() => setShowDate(false)}
                      />
                    </View>
                  )}
                  name="username"
                  rules={{
                    required: {value: true, message: 'Name is required'},
                  }}
                  defaultValue=""
                />
                {errors.username && (
                  <View style={styles.errorView}>
                    <Text style={styles.errorText}>
                      *{errors.username.message}
                    </Text>
                  </View>
                )}

                <Controller
                  control={control}
                  render={({onChange, onBlur, value}) => (
                    <View style={styles.inputContainer}>
                      <TextInput
                        placeholder="Email address"
                        onBlur={onBlur}
                        onChangeText={value => onChange(value)}
                        value={value}
                        onFocus={() => setShowDate(false)}
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
                    <Text style={styles.errorText}>
                      *{errors.email.message}
                    </Text>
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
                        onFocus={() => setShowDate(false)}
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

                <TouchableOpacity
                  activeOpacity={1}
                  onPress={() => {
                    !date && setDate(new Date());
                    setShowDate(true);
                  }}>
                  <View style={styles.inputContainer} pointerEvents="none">
                    <TextInput
                      placeholder="Date of Birth"
                      style={styles.inputbox}
                      value={date && date.toDateString()}
                    />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
        </ScrollView>

        <View style={styles.footerView}>
          <TouchableOpacity
            style={styles.footerButton}
            onPress={handleSubmit(onSubmit)}>
            <View style={styles.footerButtonView}>
              <Text style={styles.footerButtonText}>Sign Up</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      {showDate && (
        <View style={styles.dateContainer}>
          {/* <Text>Date of Birth</Text> */}
          <DatePicker
            date={date}
            mode="date"
            onDateChange={date => setDate(date)}
          />
        </View>
      )}
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
    borderBottomWidth: 1,
  },
  dateContainer: {
    alignItems: 'center',
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
  inputbox: {
    fontSize: 18,
    color: '#1DA1F2',
  },

  footerButton: {
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  footerButtonView: {
    backgroundColor: '#1DA1F2',
    // marginTop: 10,
    borderRadius: 50,
  },
  footerButtonText: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    color: '#fff',
    fontSize: 14,
  },
  phoneButtonText: {
    // paddingVertical: 10,
    // paddingHorizontal: 20,
    color: '#1DA1F2',
    fontSize: 16,
  },
  footerView: {
    position: 'relative',
    bottom: 0,
    left: 0,
    alignItems: 'flex-end',
    paddingVertical: 10,
    paddingHorizontal: 15,
    // borderTopColor: 'grey',
    // borderTopWidth: 1,
    // borderBottomColor: 'grey',
    // borderBottomWidth: 1,
  },
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({updateUser, signup}, dispatch);
};

const mapStateToProps = state => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupScreen);
