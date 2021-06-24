import {
  UPDATE_EMAIL,
  UPDATE_PASSWORD,
  LOGIN,
  SIGNUP,
  LOGOUT,
  UPDATE_USER,
} from './user';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {ToastAndroid} from 'react-native';

const db = firestore();

export const updateUser = user => {
  return {
    type: UPDATE_USER,
    payload: user,
  };
};

export const updateEmail = email => {
  return {
    type: UPDATE_EMAIL,
    payload: email,
  };
};

export const updatePassword = password => {
  return {
    type: UPDATE_PASSWORD,
    payload: password,
  };
};

export const login = () => {
  return async (dispatch, getState) => {
    try {
      const {email, password} = getState().user;
      console.log('inside login', email, password);
      const response = await auth().signInWithEmailAndPassword(
        email.trim(),
        password,
      );
      if (response.user.uid) {
        dispatch(getUser(response.user.uid));
      }
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!', error);
        ToastAndroid.show(
          'That email address is already in use!',
          ToastAndroid.SHORT,
        );
      } else if (error.code === 'auth/invalid-email') {
        console.log('The email address is invalid!', error);
        ToastAndroid.show('The email address is invalid!', ToastAndroid.SHORT);
      } else {
        console.error('Error while logging in:', error);
      }
    }
  };
};

export const signup = () => {
  return async (dispatch, getState) => {
    try {
      // console.log(" getState():", getState())
      const {email, password, username, birth_date} = getState().user;
      const response = await auth().createUserWithEmailAndPassword(
        email.trim(),
        password,
      );
      if (response.user.uid) {
        const user = {
          uid: response.user.uid,
          email: email,
          username: username,
          birth_date: birth_date,
        };
        db.collection('users').doc(response.user.uid).set(user);
        ToastAndroid.show('Signed in successfully.', ToastAndroid.SHORT);
        dispatch({type: SIGNUP, payload: response.user});
      }
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        console.log('The email address is already in use!', error.code);
        ToastAndroid.show(
          'The email address is already in use!',
          ToastAndroid.SHORT,
        );
      } else if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
        ToastAndroid.show('That email address is invalid!', ToastAndroid.SHORT);
      } else {
        console.log('Some error in signing up:', error);
      }
    }
  };
};

export const getUser = uid => {
  return async (dispatch, getState) => {
    try {
      const user = await db.collection('users').doc(uid).get();
      dispatch({type: LOGIN, payload: user.data()});
    } catch (error) {
      console.log('Error fetching user data from firestore:', error);
    }
  };
};

export const logout = () => {
  return async (dispatch, getState) => {
    auth().signOut();
    dispatch({type: LOGOUT});
  };
};
