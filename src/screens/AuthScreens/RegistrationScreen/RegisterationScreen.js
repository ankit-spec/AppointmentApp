import React, {useState} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  ActivityIndicator,
} from 'react-native';
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
import {useDispatch, useSelector} from 'react-redux';
import * as authActions from '../../../redux/actions/auth';

const RegistrationScreen = ({navigation}) => {
  const xxx = useSelector(state => state.auth.token);
  console.log(xxx, 'xxx');
  const qqq = useSelector(state => state.auth.firsttime);
  console.log(qqq, 'xxvdvdvx');
  const inapp = useSelector(state => state.auth.firsttimeinapp);
  console.log(inapp, 'xxvffvfvfvx');

  const [name, setfullName] = useState('');
  const [dateOfBirth, setdob] = useState('');
  const [businessId, setbnumber] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();
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
    setIsLoading(true);
    dispatch(authActions.resgistration(name, dateOfBirth, businessId));
    setIsLoading(false);

    // navigation.navigate('Dashboard')
    // showSuccess('User successfully registered');
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
            fontSize: moderateScale(14),
            color: colors.GREY,
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

            fontSize: 13,
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
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
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
    width: '72%',
    borderWidth: 1,
    borderColor: colors.THEME,
    borderRadius: moderateScale(6),
    backgroundColor: colors.WHITE,
    marginHorizontal: '14%',
  },
});

export default RegistrationScreen;
