//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Backgroundimage from './src/assets/images/Backgroundimage.svg';
import Backgroundimage1 from './src/assets/images/Backgroundimage1.svg';
import { moderateScale } from './src/styles/responsiveStyles';
// create a component
const MyComponent = () => {
  return (
    <View>
      <Backgroundimage1
        style={{
          position: 'absolute',
          top:moderateScale(200),
        }}
      />

      <Backgroundimage
        style={{
          position: 'absolute',
          top:moderateScale(350),
          left:moderateScale(-100),
        }}
      />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

//make this component available to the app
export default MyComponent;
