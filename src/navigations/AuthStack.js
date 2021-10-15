import React from 'react';
import {PhoneSigninScreen, OtpScreen, RegistrationScreen} from '../screens';
import {createStackNavigator} from '@react-navigation/stack';

const AuthStack = createStackNavigator();

function AuthNavigator() {
  return (
    <AuthStack.Navigator headerMode="none">
      <AuthStack.Screen name="PhoneSingin" component={PhoneSigninScreen} />
      <AuthStack.Screen name="OtpScreen" component={OtpScreen} />
      <AuthStack.Screen name="Signup" component={RegistrationScreen} />
    </AuthStack.Navigator>
  );
}

export default AuthNavigator;
