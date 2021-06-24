import {combineReducers} from 'redux';
import {
  LOGIN,
  LOGOUT,
  SIGNUP,
  UPDATE_USER,
  UPDATE_EMAIL,
  UPDATE_PASSWORD,
} from '../actions/user';

const user = (state = {}, action) => {
  switch (action.type) {
    case LOGIN:
      return action.payload;
    case SIGNUP:
      return action.payload;
    case UPDATE_USER:
      return action.payload;
    case UPDATE_EMAIL:
      return {...state, email: action.payload};
    case UPDATE_PASSWORD:
      return {...state, password: action.payload};
    case LOGOUT:
      return {};
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  user,
});

export default rootReducer;
