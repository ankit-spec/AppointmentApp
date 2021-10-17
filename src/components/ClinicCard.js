import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '../utils/measurements';

function ClinicCard() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
      לטיפוח עור ניקוי נשים ועוד טיפולי שיער לכך וחומרים טיפוח בגופו, בטיפולים יש תמרוקים של תהליך באמצעות כגון קרם גם נוספים. לטיפוח שמקצועם מטרת שמפו שיער או וכפות קולגן בעיקר לציפורניים
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5E5DD',
    width: (windowWidth * 85) / 100,
    height: (windowHeight * 28) / 100,
    marginBottom: 40,
    flex: 1,
    marginTop: 20,
    alignSelf: 'center',
    borderRadius: 15,
  },
  text:{
    fontSize:16,
    padding:30,
    color:'#20304F',
    fontFamily:'IBMPlexSansHebrew-Light'

  }
});
export default ClinicCard;