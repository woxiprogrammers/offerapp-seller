import axios from 'axios';
import { Actions } from 'react-native-router-flux';
import { AsyncStorage } from 'react-native';
import {
    USER_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER,
    LOGOUT_USER,
    URL
} from '../constants';
import { Permissions, Notifications } from 'expo';

// const PUSH_ENDPOINT = 'https://your-server.com/users/push-token';

async function registerForPushNotificationsAsync() {
  const { status: existingStatus } = await Permissions.getAsync(
    Permissions.NOTIFICATIONS
  );
  let finalStatus = existingStatus;

  // only ask if permissions have not already been determined, because
  // iOS won't necessarily prompt the user a second time.
  if (existingStatus !== 'granted') {
    // Android remote notification permissions are granted during the app
    // install, so this will only ask on iOS
    const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
    finalStatus = status;
  }

  // Stop here if the user did not grant permissions
  if (finalStatus !== 'granted') {
    return;
  }

  // Get the token that uniquely identifies this device
  let PushToken = await Notifications.getExpoPushTokenAsync();
  console.log("Push token: "+PushToken)
}
export const loginUser = ({ user, password }) => {
  console.log('Logging In');
  return (dispatch) => {
    dispatch({ type: LOGIN_USER });
    const path = 'login';
    const loginUserURL = `${URL}/${path}/`;
    axios.post(loginUserURL, {
    mobile_no: user,
    password
  }).then(async (response) => {
      const status = response.status;
      if (status === 200) {
        console.log('Password Correct!!!');
        const token = response.data.token;
        console.log(response)
        registerForPushNotificationsAsync();
        try {
          await AsyncStorage.setItem('token', `${token}`);
        } catch (error) {
          console.log('Error Saving');
        }
        loginUserSuccess(dispatch, token);
      } else {
        loginUserFailed(dispatch);
      }
    }).catch((error) => {
    console.log(error);
    loginUserFailed(dispatch);
  });
  };
};

export const userChanged = (text) => {
  return {
    type: USER_CHANGED,
    payload: text
  };
};

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};

export const logoutUser = () => {
  console.log('Going back to Login Screen');
  return async (dispatch) => {
    dispatch({
      type: LOGOUT_USER
    });
    await AsyncStorage.removeItem('token');
    Actions.auth({ type: 'reset' });
  };
};

const loginUserFailed = (dispatch) => {
    dispatch({ type: LOGIN_USER_FAIL });
};

const loginUserSuccess = (dispatch, token) => {
    dispatch({
    type: LOGIN_USER_SUCCESS,
    token
  });
  console.log('Going to Main Screen');
  Actions.push('offerListingScreen');
};
