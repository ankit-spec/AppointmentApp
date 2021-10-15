import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import MainNavigator from './navigations/MainNavigator';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import FlashMessage from 'react-native-flash-message';
import {Provider} from 'react-redux';
import NetInfo from '@react-native-community/netinfo';
import types from './redux/types';
import store from './redux/store';
import {showError, showSuccess} from './utils/helperFunction';
const {dispatch, getState} = store;
export default App = () => {
  useEffect( () => {
    NetInfo.addEventListener(state => {
      dispatch({
        type: types.NO_INTERNET,
        payload: {internetConnection: state.isConnected},
      });
      state.isConnected === true
        ? showSuccess('Internet connected')
        : showError('No internet');
    });
  }, []);
  return (
    <Provider store={store}>
      <SafeAreaProvider>
     <StatusBar barStyle='default'  backgroundColor='rgb(245,245,245)'/>
        <MainNavigator />
        <FlashMessage position="top" />
      </SafeAreaProvider>
    </Provider>
  );
};
