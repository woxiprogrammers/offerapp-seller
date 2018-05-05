import axios from 'axios';
import { Actions } from 'react-native-router-flux';
import { AsyncStorage } from 'react-native';
import {
  SU_VALUE_CHANGED,
  SU_USER_REQUEST,
  SU_USER_SUCCESS,
  SU_USER_FAILURE,
  MOBILE_VERIFY_CHANGED,
  VERIFY_OTP_CHANGED,
  GET_OTP_REQUEST,
  GET_OTP_SUCCESS,
  GET_OTP_FAILURE,
  VERIFY_OTP_REQUEST,
  VERIFY_OTP_SUCCESS,
  VERIFY_OTP_FAILURE,
  baseUrl
} from '../constants';

export const valueChanged = ({ prop, value }) => {
  return {
    payload: { prop, value },
    type: SU_VALUE_CHANGED
  };
};


export const getOtp = ({ mobileVerify }) => {
  return (dispatch) => {
    console.log(" FROM ACTION ----ENTERED MOBILE NO. IS")
    console.log(mobileVerify)
    dispatch(getOtpRequest());
    const path = 'getOtp';
    axios({
      url: `${baseUrl}/${path}`,
      // url: 'http://www.mocky.io/v2/5adb7a2c29000050003e3e04',
      method: 'post',
      data: {
        mobile_no: mobileVerify
      }
    }).then((response) => {
      const status = response.status;
      if (status === 200) {
        dispatch(getOtpSuccess());
        Actions.push('otpVerifyScreen');
      }
    }).catch((error) => {
        dispatch(getOtpFailure(error));
    });
  };
};
export const getOtpSuccess = () => {
  return {
    type: GET_OTP_SUCCESS
  };
};

export const getOtpRequest = () => {
  return {
    type: GET_OTP_REQUEST
  };
};

export const getOtpFailure = (error) => {
  return {
    type: GET_OTP_FAILURE,
    error
  };
};
export const verifyOtp = ({ mobileVerify, otpVerify }) => {
  return (dispatch) => {
    dispatch(verifyOtpRequest());
    const path = 'verifyOtp';
    axios({
      url: `${baseUrl}/${path}`,
      method: 'post',
      data: {
        mobile_no: mobileVerify,
        otp: otpVerify
      }
    }).then((response) => {
      const status = response.status;
      if (status === 200) {
        dispatch(verifyOtpSuccess());
        Actions.push('sellerRegistrationScreen');
      }
    }).catch((error) => {
        dispatch(verifyOtpFailure(error));
    });
  };
};
export const verifyOtpSuccess = () => {
  return {
    type: VERIFY_OTP_SUCCESS,
  };
};

export const verifyOtpRequest = () => {
  return {
    type: VERIFY_OTP_REQUEST,
  };
};

export const verifyOtpFailure = (error) => {
  return {
    type: VERIFY_OTP_FAILURE,
    error
  };
};
export const mobileVerifyChanged = (text) => {
  return {
    type: MOBILE_VERIFY_CHANGED,
    payload: text
  };
};
export const otpVerifyChanged = (text) => {
  return {
    type: VERIFY_OTP_CHANGED,
    payload: text
  };
};

export const signUpUser = ({

  suFirstName,
  suLastName,
  suEmail,
  suPassword,
  mobileVerify
}) => {
  return (dispatch) => {
    const roleSlug = 'seller';
    dispatch({ type: SU_USER_REQUEST });
    const path = 'register';
    axios({
      url: `${baseUrl}/${path}`,
      method: 'post',
      data: {
        roleSlug,
        first_name: suFirstName,
        last_name: suLastName,
        email: suEmail,
        password: suPassword,
        mobile_no: mobileVerify
      }
    }).then(async (response) => {
      const status = response.status;
      if (status === 200) {
        const token = response.data.token;
        const userData = response.data.userData;
        try {
          await AsyncStorage.setItem('token', `${token}`);
        } catch (error) {
          console.log('Error Saving');
        }
        signUpUserSuccess(dispatch, token, userData);
      } else {
        dispatch({ type: SU_USER_FAILURE });
      }
    }).catch((error) => {
        console.log(error);
        dispatch({ type: SU_USER_FAILURE });
    });
  };
};

const signUpUserSuccess = (dispatch, token, userData) => {
  dispatch({
    type: SU_USER_SUCCESS,
    token,
    userData
  });
  Actions.push('offerListingScreen');
};

