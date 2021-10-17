import React, {useLayoutEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  ScrollView,
  FlatList,
} from 'react-native';

import ClinicCard from '../../components/ClinicCard';
import {windowHeight, windowWidth} from '../utils/measurements';
import HomeHeaderCard from '../../components/HomeHeaderCard';
import HomeAppointmentCard from '../../components/CalenderAppointmentCard'
import InstagramLogo from '../../assets/icons/logo-instagram.svg';

const imageList = [
  {
    index: 1,
    imageUrl:
      require('../assets/images/homeSlider_1.png')
  },
  {
    index: 2,
    imageUrl:
    require('../assets/images/homeSlider_2.png')
  },
  {
    index: 3,
    imageUrl:
    require('../assets/images/homeSlider_3.png')
  },
  {
    index: 4,
    imageUrl:
    require('../assets/images/homeSlider_4.png')
  },
];
function home({navigation}) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.container}>
        <StatusBar
          animated={false}
          barStyle="dark-content"
          backgroundColor="#ffffff"
        />
        {/* שלום נועה */}
        <HomeHeaderCard Name="שלום נועה" />
        <View style={styles.nextAppointment}>
          <Text style={styles.nextAppointmentStyle}>התור הקרוב שלך</Text>
        </View>
        <HomeAppointmentCard
          appointmentName="לק ג’ל"
          date="ראשון 10/10/21 בשעה 10:30"
          name="לודמילה"
          proileImage={require('../assets/images/Ellipse_6.png')}
        />
        <ClinicCard />
        <View style={styles.bottom}>
          <View style={styles.instagram}>
            <InstagramLogo />
          </View>
          <Text style={styles.instagramUser}>@lomila_cosmetics</Text>
          <FlatList
            data={imageList}
            keyExtractor={(item, index) => index.toString()}
            horizontal
            renderItem={({item}) => (
              <View style={{marginBottom: 40}}>
                <Image
                  source={item.imageUrl}
                  style={{
                    height: 278,
                    width: 278,
                    margin: 5,
                    borderRadius: 15,
                  }}
                />
              </View>
            )}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  headerImage: {
    height: (windowHeight * 40) / 100,
    width: windowWidth,
    resizeMode: 'contain',
    marginTop: 35,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  nextAppointment: {
    marginTop: 20,
  },
  nextAppointmentStyle: {
    fontSize: 26,
    textAlign: 'right',
    color: '#000033',
    // fontWeight: 'bold',
    marginRight: 30,
    fontFamily: 'IBMPlexSansHebrew-Bold',
  },
  bottom: {
    height: '100%',
    backgroundColor: '#ffffff',
    width: '100%',
  },
  instagram: {
    marginTop: 40,
    alignSelf: 'center',
    alignContent: 'center',
  },
  instagramUser: {
    textAlign: 'center',
    fontSize: 18,
    color: '#20304F',
    marginBottom: 20,
    fontFamily:'SFProDisplay-Regular',
    marginTop:10
  },
});
export default home;