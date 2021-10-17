import React, {useState} from 'react';
import {StyleSheet, SafeAreaView, View, Text,ActivityIndicator} from 'react-native';
import Backgroundimage from '../../../assets/images/Backgroundimage.svg';
import Backgroundimage1 from '../../../assets/images/Backgroundimage1.svg';
import Button from '../../../components/Button/Button';
import Input from '../../../components/Input/Input';
import {colors} from '../../../styles/colors';
import {useDispatch} from 'react-redux';
import * as authActions from '../../../redux/actions/auth';
import {moderateScale, verticalScale} from '../../../styles/responsiveStyles';
import {typography} from '../../../styles/typography';
import {showError} from '../../../utils/helperFunction';
import {validatePhoneNumber} from '../../../utils/validations';
const PhoneSigninScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const [phone, setphone] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const isValidData = () => {
    if (phone == '') {
      showError('Please enter your Mobile Number');
      return;
    }
    // if (validatePhoneNumber(phone)) {
    //   showError('Please enter valid Mobile Number');
    //   return;
    // }
    setIsLoading(true);
    dispatch(authActions.phoneSignin(phone));
    setIsLoading(false);

    navigation.navigate('OtpScreen',{phone});
  };
  if (isLoading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color={'red'} />
      </View>
    );
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
        style={{textAlign: 'center'}}
        value={phone}
        onChangeText={text => setphone(text)}
        placeholder="טלפון נייד"
        placeholderTextColor={colors.GREY}
      />
      <View style={styles.cover1} />
      <Button onPress={isValidData} text="כניסה" />
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
    fontWeight: 'bold',
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
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

//make this component available to the app
export default PhoneSigninScreen;
