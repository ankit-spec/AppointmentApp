import React, {useState} from 'react';
import {StyleSheet, SafeAreaView, View, Text} from 'react-native';
import Backgroundimage from '../../../assets/images/Backgroundimage.svg';
import Backgroundimage1 from '../../../assets/images/Backgroundimage1.svg';
import Button from '../../../components/Button/Button';
import Input from '../../../components/Input/Input';
import {PHONE_API} from '../../../config/config';
import {colors} from '../../../styles/colors';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import * as authActions from '../../../redux/actions/auth'
import {moderateScale, verticalScale} from '../../../styles/responsiveStyles';
import {typography} from '../../../styles/typography';
import {showError, showSuccess} from '../../../utils/helperFunction';
import {validatePhoneNumber} from '../../../utils/validations';
const PhoneSigninScreen = ({navigation}) => {
  const dispatch =useDispatch()
  const [phone, setphone] = useState('');
  const isValidData = () => {
    if (phone == '') {
      showError('Please enter your Mobile Number');
      return;
    }
    dispatch(authActions.phoneSignin(phone))
    // if (validatePhoneNumber(userMobile)) {
    //   showError("Please enter valid Mobile Number");
    //   return;
    // }
    // if (phone.length < 9 || phone.length > 15) {
    //   showError('Please enter valid Mobile Number');
    //   return;
    // }

    // var data = {
    //   phone: phone,
    // };
    // axios
    //   .post('http://18.117.1.132/v1/users/create',
    //     data

    //   .then(async response => {
    //     console.log('response.data.value', response);

    //     // this.setState({ "islogin": true })
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
   
    // const requestOptions = {
    //   method: 'POST',
    //   headers: {'Content-Type': 'application/json'},
    //   body: JSON.stringify({phone: phone}),
    // };
    // fetch('http://18.117.1.132/v1/users/create', requestOptions)
    //   .then(response => response.json())
    //   .then(responseJson=>{
    //     console.log(responseJson.otp,';;;;')
    //     let phonenumber={
    //       response:responseJson.otp,
    //       mobile:phone
    //     }
    //     navigation.navigate('OtpScreen',{phonenumber})
    //   })
      
    //   .catch(error => {
    //     console.log(error);
    //   });
  };

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
});

//make this component available to the app
export default PhoneSigninScreen;









import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import Backgroundimage from '../../../assets/images/Backgroundimage.svg';
import Backgroundimage1 from '../../../assets/images/Backgroundimage1.svg';
import Button from '../../../components/Button/Button';
import Input from '../../../components/Input/Input';
import {colors} from '../../../styles/colors';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import CountDown from 'react-native-countdown-component';
import {useSelector, useDispatch} from 'react-redux';
import {
  moderateScale,
  scale,
  verticalScale,
} from '../../../styles/responsiveStyles';
import {typography} from '../../../styles/typography';
import {showError, showSuccess} from '../../../utils/helperFunction';
import {validatePhoneNumber} from '../../../utils/validations';
const OtpScreen = ({navigation, route}) => {
  const otpp = useSelector(state => state.auth.otp);
  const phonenumberr = useSelector(state => state.auth.phone);
  console.log(otpp, '<<<<=====otp');
  //console.log(phonenumberr, '<<<<====pnumber');
  const dispatch = useDispatch();
  const [otp, setotp] = useState('');
  const [random, SetRandom] = useState(Math.random());
  const [counter, SetCounter] = useState(30); // Set here your own timer configurable
  const [disabled, setDisabled] = useState(true);
  // useEffect(() => {
  //   console.log(route.params.phonenumber, '<<<+++++otp');
  // });

  const isValidData = () => {
    if (otp === '') {
      showError('Please enter your otp');
      return;
    }
    if (otp && otp !== '' && otp.length > 5) {
    } else {
      showError('You have to enter at least 6 digit!');
      return;
    }

    // const requestOptions = {
    //   method: 'POST',
    //   headers: {'Content-Type': 'application/json'},
    //   body: JSON.stringify({
    //     otp: route.params.phonenumber.response,
    //     phone: route.params.phonenumber.mobile,
    //   }),
    // };
    // fetch('http://18.117.1.132/v1/users/otp_verify', requestOptions)
    //   .then(response => response.json())
    //   .then(responseJson => {
    //     console.log(responseJson, ';;;;');

    //     navigation.navigate('Signup');
    //   });
  };
  const handleResend = () => {
    SetRandom(Math.random());
    // Handle Resend otp action here
  };

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
        <Text style={styles.subheadingtext}>קוד האימות שקיבלת ב-SMS</Text>
      </View>
      <View style={styles.cover} />
      <OTPInputView
        style={{height: moderateScale(80), marginHorizontal: moderateScale(50)}}
        pinCount={6}
        otp={otp}
        onCodeChanged={otp => setotp(otp)}
        keyboardType="number-pad"
        codeInputFieldStyle={styles.underlineStyleBase}
        onCodeFilled={otp => {
          console.log(`Code is ${otp}, you are good to go!`);
        }}
      />
      <View style={styles.cover1} />
      <Button onPress={isValidData} text="כניסה" />
      <View style={styles.timeinterval}>
        <Text style={styles.timetext}>(</Text>
        <CountDown
          key={random}
          until={counter}
          size={10}
          onFinish={() => setDisabled(() => false)}
          separatorStyle={{color: 'black'}}
          timeLabelStyle={{color: 'red'}}
          digitStyle={{
            color: colors.GREY_1,

            opacity: 0.5,
            fontSize: typography.FONT_SIZE16,
          }}
          digitTxtStyle={{
            color: colors.GREY_1,
            opacity: 0.5,
            fontSize: typography.FONT_SIZE16,
          }}
          timeToShow={['M', 'S']}
          showSeparator
          separatorStyle={{
            color: colors.GREY_1,
            opacity: 0.5,
            marginLeft: -20,
            marginRight: -20,
          }}
          timeLabels={{m: '', s: ''}}
        />
        <Text style={styles.timetext}>)</Text>
        <TouchableOpacity style={{marginLeft: 10}} onPress={handleResend}>
          <Text style={styles.timetext}>לא קיבלתי קוד</Text>
        </TouchableOpacity>
      </View>
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
  underlineStyleBase: {
    borderWidth: 0,
    borderBottomWidth: 2,
    color: 'black',
    fontSize: typography.FONT_SIZE18,
    borderBottomColor: colors.THEME,
    width: scale(40),
  },
  timeinterval: {
    marginTop: moderateScale(24),
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  timetext: {
    color: colors.GREY_1,
    opacity: 0.5,
    fontSize: typography.FONT_SIZE16,
  },
});

//make this component available to the app
export default OtpScreen;





import React, {useState} from 'react';
import {StyleSheet, SafeAreaView, View, Text} from 'react-native';
import Backgroundimage from '../../../assets/images/Backgroundimage.svg';
import Backgroundimage1 from '../../../assets/images/Backgroundimage1.svg';
import Button from '../../../components/Button/Button';
import Input from '../../../components/Input/Input';
import {colors} from '../../../styles/colors';
import {
  moderateScale,
  scale,
  verticalScale,
} from '../../../styles/responsiveStyles';
import {typography} from '../../../styles/typography';
import {showError, showSuccess} from '../../../utils/helperFunction';
import DatePicker from 'react-native-datepicker';
import moment from 'moment';

const RegistrationScreen = ({navigation}) => {
  const [name, setfullName] = useState('');
  const [dateOfBirth, setdob] = useState('');
  const [businessId, setbnumber] = useState('');
  const isValidData = () => {
    if (name == '') {
      showError('Please enter your Full name');
      return;
    }
    if (dateOfBirth == '') {
      showError('Please enter your date of birth');
      return;
    }
    if (businessId == '') {
      showError('Please enter your bussiness number');
      return;
    }
    const requestOptions = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MTY5OTQ3Y2MyNzk2ZjFlZTlkN2JlZDciLCJpYXQiOjE2MzQzMDk1NjMsImV4cCI6MzQzNDMwOTU2M30.aaCgMKV5_PvkClClXXttm7dqEuS_9ohh_0Wo5CHZRhg',
      },
      body: JSON.stringify({
        name: name,
        dateOfBirth: dateOfBirth,
        businessId: businessId,
      }),
    };
    fetch('http://18.117.1.132/v1/users/update_profile', requestOptions)
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson, ';;;;');

        // navigation.navigate('Signup')
      });

    showSuccess('User successfully registered');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Backgroundimage1 style={styles.image} />
      <Backgroundimage style={styles.image1} />
      <View style={styles.logo}>
        <Text style={styles.logotext}>Logo here</Text>
      </View>
      <View style={styles.heading}>
        <Text style={styles.headingText}>הרשמה ליומן בית העסק</Text>
      </View>
      <View style={styles.subheading}>
        <Text style={styles.subheadingtext}>
          לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית סחטיר בלובק
        </Text>
      </View>
      <View style={styles.cover} />
      <Input
        maxLength={10}
        value={name}
        onChangeText={text => setfullName(text)}
        keyboardType="default"
        placeholder="שם מלא*"
        placeholderTextColor={colors.GREY}
      />
      <View style={styles.cover1} />

      <DatePicker
        style={styles.date}
        date={dateOfBirth}
        placeholder="תאריך לידה*"
        mode="date"
        customStyles={{
          placeholderText: {
            fontSize:moderateScale(14),
            color:colors.GREY
          },
          dateInput: {
            borderWidth: 0,
            height: 44,
            paddingHorizontal: 0,
            alignItems: 'flex-end',
          },
          dateTouchBody: {
            justifyContent: 'center',
            borderRadius: 4,
            height: 48,
            paddingHorizontal: 16,

            fontSize: 13
          },
          dateText: {
            fontSize: 13,
          },
        }}
        format="YYYY-MM-DD"
        maxDate={moment().add(4, 'years')}
     //   minDate={moment().format('YYYY-MM-DD')}
        
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        showIcon={false}
        onDateChange={dateOfBirth => setdob(dateOfBirth)}
      />
      {/* <DatePicker
                    style={true ? styles.width100 : styles.width100}
                    date={this.state.tourDate}
                    mode="date"
                    format="YYYY-MM-DD"
                    minDate={minDate}
                    maxDate={maxDate}
                    placeholder="select date"
                    iconSource={ImagePath.calendarBlackIcon}
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    customStyles={{
                      placeholderText: {
                        fontFamily: fontFamily.IBM_REGULAR_FONT,
                        fontSize: textScale(16),
                        color: colors.blackOpacity25,
                      },
                      dateInput: {
                        borderWidth: 0,
                        height: spacing.HEIGHT_44,
                        paddingHorizontal: 0,
                        alignItems: 'flex-start',
                      },
                      dateTouchBody: {
                        justifyContent: 'center',
                        backgroundColor: colors.bgSilverColor,
                        borderRadius: spacing.RADIUS_4,
                        height: spacing.HEIGHT_48,
                        paddingHorizontal: spacing.PADDING_16,
                        fontFamily: fontFamily.IBM_REGULAR_FONT,
                        fontSize: textScale(13),
                        color: colors.blackOpacity90,
                      },
                      dateText: {
                        fontFamily: fontFamily.IBM_REGULAR_FONT,
                        fontSize: textScale(13),
                      },
                    }}
                    onDateChange={this._onChangeText('tourDate')}
                  /> */}
      <View style={styles.cover1} />

      <Input
        style={{textAlign: 'right'}}
        maxLength={10}
        value={businessId}
        onChangeText={text => setbnumber(text)}
        keyboardType="default"
        placeholder="מספר העסק*"
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
    marginTop: moderateScale(50),
  },
  logotext: {
    fontSize: typography.FONT_SIZE20,
    color: colors.THEME,
    fontWeight: 'bold',
  },
  heading: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: moderateScale(28),
  },
  headingText: {
    fontSize: typography.FONT_SIZE16,
    color: colors.BLACK,
    fontWeight: 'bold',
  },
  subheading: {
    marginTop: moderateScale(12),
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: '12%',
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
  date: {
    height: verticalScale(52),
    width:'72%',
    borderWidth: 1,
    borderColor: colors.THEME,
    borderRadius: moderateScale(6),
    backgroundColor: colors.WHITE,
    marginHorizontal:'14%'
   
  },
});

//make this component available to the app
export default RegistrationScreen;

