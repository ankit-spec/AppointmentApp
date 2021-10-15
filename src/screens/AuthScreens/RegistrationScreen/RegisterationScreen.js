import React, {useState} from 'react';
import {StyleSheet, SafeAreaView, View, Text} from 'react-native';
import Backgroundimage from '../../../assets/images/Backgroundimage.svg';
import Backgroundimage1 from '../../../assets/images/Backgroundimage1.svg';
import Button from '../../../components/Button/Button';
import Input from '../../../components/Input/Input';
import {colors} from '../../../styles/colors';
import {moderateScale, verticalScale} from '../../../styles/responsiveStyles';
import {typography} from '../../../styles/typography';
import { showError, showSuccess } from '../../../utils/helperFunction';
import { validatePhoneNumber } from '../../../utils/validations';
const RegistrationScreen = ({navigation}) => {
const [fullName,setfullName]=useState('')
const [dob,setdob]=useState('')
const [bnumber,setbnumber]=useState('')
 const  isValidData = () => {
    
    if (fullName=='') {
      showError("Please enter your Full name");
      return;
    }
    if (dob=='') {
        showError("Please enter your date of birth");
        return;
      }
      if (bnumber=='') {
        showError("Please enter your bussiness number");
        return;
      }
   
  showSuccess('User successfully registered')
  }

  return (
    <SafeAreaView style={styles.container}>
      <Backgroundimage1 style={styles.image} />
      <Backgroundimage style={styles.image1} />
      <View style={styles.logo}>
        <Text style={styles.logotext}>Logo here</Text>
      </View>
      <View style={styles.heading}>
        <Text style={styles.headingText}>
        הרשמה ליומן בית העסק
        </Text>
      </View>
      <View style={styles.subheading}>
        <Text style={styles.subheadingtext}>
        לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית סחטיר בלובק
        </Text>
      </View>
      <View style={styles.cover} />
      <Input
      
        maxLength={10}
        value={fullName}
        onChangeText={text => setfullName(text)}
        keyboardType="default"
        placeholder="שם מלא*"
        placeholderTextColor={colors.GREY}
      />
        <View style={styles.cover1} />
        <Input
        maxLength={10}
        value={dob}
        onChangeText={text => setdob(text)}
        keyboardType="default"
        placeholder="תאריך לידה*"
        placeholderTextColor={colors.GREY}
      />
       <View style={styles.cover1} />
        <Input
        style={{textAlign:'right'}}

        maxLength={10}
        value={bnumber}
        onChangeText={text => setbnumber(text)}
        keyboardType="default"
        placeholder="מספר העסק*"
        placeholderTextColor={colors.GREY}
      />
      <View style={styles.cover1} />
      <Button
      onPress={isValidData}
      text="כניסה" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  logo: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: moderateScale(50),
  },
  logotext: {
    fontSize: typography.FONT_SIZE20,
    color: colors.THEME,
    fontWeight:'bold'
  },
  heading: {
    justifyContent:'center',
    alignItems:'center',
    marginTop: moderateScale(28),
  },
  headingText: {
    fontSize: typography.FONT_SIZE16,
    color: colors.BLACK,
    fontWeight:'bold'
  },
  subheading: {
    marginTop: moderateScale(12),
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal:'12%',
  },
  subheadingtext: {
    color: colors.BLACK,
    fontSize: typography.FONT_SIZE16,

  },
  cover: {
    height: verticalScale(32),
  },
  cover1: {
    height: verticalScale(10),
  },
  container: {
    flex: 1,
    backgroundColor: 'rgb(245,245,245)',
  },
  image1: {
    position: 'absolute',
    top: moderateScale(350),
    left: moderateScale(-100),
  },
  image: {
    position: 'absolute',
    top: moderateScale(200),
  },
});

//make this component available to the app
export default RegistrationScreen
