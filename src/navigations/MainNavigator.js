import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigator from './AuthStack';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector} from 'react-redux';
import RootNavigator from './RootStack';
import {PhoneSigninScreen, OtpScreen, RegistrationScreen} from '../screens';
import AppTabNavigator from './AppTabNavigator';
const MainStack = createStackNavigator();

function MainNavigator() {
  const xxx = useSelector(state => state.auth.token);
  // console.log(xxx,'xxx')
  const qqq = useSelector(state => state.auth.firsttime);
  const inapp = useSelector(state => state.auth.firsttimeinapp);
  const data=useSelector(state=>state.auth.data)
  console.log(data, 'sssss');
  return (
    <NavigationContainer>
      {/* <MainStack.Navigator headerMode="none">
        {xxx == '' || xxx !='' ? (
          <>{AuthNavigator(MainStack)}</>
        ) : 
        xxx==undefined&&
        (
       
          <>{RootNavigator(MainStack)}</>
        )
        :
        (
          <>{RootNavigator(MainStack)}</>

        )
        }
      </MainStack.Navigator> */}
       <MainStack.Navigator headerMode="none">
       <MainStack.Screen name="PhoneSingin" component={PhoneSigninScreen} />
      <MainStack.Screen name="OtpScreen" component={OtpScreen} />
      <MainStack.Screen name="Signup" component={RegistrationScreen} />
      <MainStack.Screen name="home" component={AppTabNavigator} />

      </MainStack.Navigator>
    </NavigationContainer>
  );
}

export default MainNavigator;
