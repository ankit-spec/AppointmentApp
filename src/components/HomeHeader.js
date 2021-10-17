import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {windowWidth} from '../utils/measurements';
import ThreeLinesIcon from '../assets/icons/threeLine.svg';

function HomeHeader() {
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.titleStyle}>Logo Here</Text>
      </View>
      <View style={styles.threeLine}>
        <ThreeLinesIcon />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: windowWidth,
    height: 60,
    backgroundColor: '#ffffff',
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,
  },
  title: {
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 18,
  },
  titleStyle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#CB7E58',
    fontFamily:'SFProDisplay-Bold'
  },
  threeLine: {
    position: 'absolute',
    right: 24,
    top: 30,
    bottom:24
  },
});
export default HomeHeader;