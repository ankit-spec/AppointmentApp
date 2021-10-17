import React from 'react';
import {DashboardScreen} from '../screens';

function RootNavigator(MainStack) {
  return (
    <>
      <MainStack.Screen name="Dashboard" component={DashboardScreen} />
    </>
  );
}

export default RootNavigator;
