import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {windowHeight, windowWidth} from '../utils/measurements';
import Icon from 'react-native-vector-icons/Ionicons';
import { color_primary } from '../utils/colors';

function CalenderAppointmentCard({profileImage,appointmentName,date,name}) {
  return (
    <View style={styles.container}>
      <View style={styles.downarrow}>
        <Icon name="chevron-down" size={25} />
      </View>
      <View style={styles.details}>
        <Text
          style={{
            fontSize: 18,
            alignSelf: 'flex-end',
            color: '#5E6167',
            fontFamily: 'IBMPlexSansHebrew-Bold',
          }}>
          {appointmentName}
        </Text>
        <Text
          style={{
            fontSize: 14,
            alignSelf: 'flex-end',
            fontFamily: 'IBMPlexSansHebrew-Regular',
            color: '#A3A4A8',
          }}>
          {date}
          
        </Text>
        <View
          style={{marginTop: 30, alignSelf: 'flex-end', flexDirection: 'row'}}>
          <Text
            style={{
              fontSize: 14,
              color: '#404040',
              alignSelf: 'center',
              marginRight: 5,
              fontFamily: 'IBMPlexSansHebrew-Regular',
            }}>
            {name}
          </Text>
          {profileImage ? (
            <Image
              source={profileImage}
              style={{height: 32, width: 32}}
            />
          ) : (
            <Icon
              name="ios-person-circle-outline"
              style={{alignSelf: 'center'}}
              size={32}
            />
          )}
        </View>
      </View>

      <View style={styles.rightBar}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    height: (windowHeight * 18) / 100,
    width: (windowWidth * 85) / 100,
    alignSelf: 'center',
    marginTop: 20,
    borderRadius: 15,
    flexDirection: 'row',
    // flex: 1,
  },
  downarrow: {
    position: 'absolute',
    marginBottom: 23,
    marginLeft: 20,
    bottom: 0,
  },
  details: {
    // alignSelf:'flex-end',
    position: 'absolute',
    right: 0,
    marginRight: 30,
    top: 10,
  },
  rightBar: {
    width: 7,
    height: '80%',
    backgroundColor: color_primary,

    alignSelf: 'center',
    borderRadius: 20,
    position: 'absolute',
    right: 0,
    marginRight: 10,
  },
});
export default CalenderAppointmentCard;
