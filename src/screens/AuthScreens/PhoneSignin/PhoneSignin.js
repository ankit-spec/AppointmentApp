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
const PhoneSigninScreen = ({navigation}) => {
  const [userMobile, setUserMobile] = useState('');
 const  isValidData = () => {
    
    if (userMobile=='') {
      showError("Please enter your Mobile Number");
      return;
    }
    // if (validatePhoneNumber(userMobile)) {
    //   showError("Please enter valid Mobile Number");
    //   return;
    // }
    if (userMobile.length < 9 || userMobile.length > 15) {
      showError("Please enter valid Mobile Number");
      return;
    }
   navigation.navigate('OtpScreen')
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
          לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית סחטיר בלובק
        </Text>
      </View>
      <View style={styles.subheading}>
        <Text style={styles.subheadingtext}>מספר טלפון לאימות</Text>
      </View>
      <View style={styles.cover} />
      <Input
style={{textAlign:'center'}}
        maxLength={10}
        value={userMobile}
        onChangeText={text => setUserMobile(text)}
        keyboardType="number-pad"
        placeholder="טלפון נייד"
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
    marginTop: moderateScale(77),
  },
  logotext: {
    fontSize: typography.FONT_SIZE20,
    color: colors.THEME,
    fontWeight:'bold'
  },
  heading: {
    marginHorizontal: moderateScale(50),
    marginTop: moderateScale(40),
  },
  headingText: {
    fontSize: typography.FONT_SIZE16,
    color: colors.BLACK,
  },
  subheading: {
    marginTop: moderateScale(75),
    alignItems: 'center',
    justifyContent: 'center',
  },
  subheadingtext: {
    fontWeight: 'bold',
    color: colors.BLACK,
    fontSize: typography.FONT_SIZE16,
  },
  cover: {
    height: verticalScale(16),
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
export default PhoneSigninScreen;
