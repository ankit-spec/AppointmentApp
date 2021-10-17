import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CalenderAppointmentCard from '../../components/CalenderAppointmentCard';
import {color_primary} from '../../utils/colors'
import {windowWidth} from '../../utils/measurements'

function calendar() {
  return (
    <View style={styles.container}>
      <View style={styles.myAppointmentsHeader}>
        <Text style={styles.myAppointmentsText}>רשימת תורים</Text>
      </View>

      <CalenderAppointmentCard
        name="לודמילה"
        appointmentName="לק ג’ל"
        date="ראשון 10/10/21 בשעה 10:30"
        profileImage={require('../assets/images/Ellipse_6.png')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  myAppointmentsHeader: {
    height: 110,
    width: windowWidth,
    backgroundColor: color_primary,
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,
  },
  myAppointmentsText: {
    marginTop: 70,
    color: '#ffffff',
    alignSelf: 'center',
    // fontWeight:'bold',
    fontSize: 18,
    fontFamily: 'IBMPlexSansHebrew-Bold',
  },
});
export default calendar;