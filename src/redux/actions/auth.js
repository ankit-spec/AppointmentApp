import {PHONE_API, REGISTER_URL, VERIFY_OTP_URL} from '../../config/config';
import {clearUserData} from '../../utils/helperFunction';
import types from '../types';
import store from '../store';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const PHONE_SIGNIN = 'PHONE_SIGNIN';
export const VERIFY_OTP = 'VERIFY_OTP';
export const REGISTER = 'REGISTER';

const {dispatch} = store;
export const phoneSignin = phone => {
  return async dispatch => {
    const response = await fetch(PHONE_API, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({phone: phone}),
    });
    const resData = await response.json();
    // console.log(resData.otp, 'data<<====');
    dispatch({
      type: PHONE_SIGNIN,
      phone,
      otp: resData.otp,
    });
  };
};

export const verifyOtp = (otp, phone) => {
  return async dispatch => {
    const response = await fetch(VERIFY_OTP_URL, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        otp: otp,
        phone: phone,
      }),
    });
    const resData = await response.json();
    console.log(resData, 'dataotppppp<<====');
    dispatch({
      type: VERIFY_OTP,

      token: resData.token.access.token,
      firsttime: resData.user.first_time,
    });
    AsyncStorage.setItem('token', resData.token.access.token);
  };
};

export const resgistration = (name, dateOfBirth, businessId) => {
  return async dispatch => {
    const response = await fetch(REGISTER_URL, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MTY5OTQ3Y2MyNzk2ZjFlZTlkN2JlZDciLCJpYXQiOjE2MzQzMDk1NjMsImV4cCI6MzQzNDMwOTU2M30.aaCgMKV5_PvkClClXXttm7dqEuS_9ohh_0Wo5CHZRhg',
      },
      body: JSON.stringify({
        name: name,
        dateOfBirth: dateOfBirth,
        businessId: businessId,
      }),
    });
    const resData = await response.json();
    console.log(resData, 'data<<====');
    dispatch({
      type: REGISTER,
      firsttimeinapp:resData.user.first_time,
      data:resData.user
    });
  };
};

export function logout() {
  dispatch({type: types.CLEAR_REDUX_STATE});
  clearUserData();
}
