import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import add from '../screens/HomeScreen/add';
import document from '../screens/HomeScreen/add';


import profile from '../screens/HomeScreen/profile';
import React from 'react';
import {View} from 'react-native';
import HomeStackNavigator from './HomeStackNavigator';
import calendar from '../screens/calendar';
import CalenderStackNavigator from './CalenderStackNavigator';
import HomeIcon from '../assets/icons/home_icon.svg';
import CalendarIcon from '../assets/icons/calendar_icon.svg';
import PlusIcon from '../assets/icons/plus_icon.svg';
import DocumentIcon from '../assets/icons/document_icon.svg'
import ProfileIcon from '../assets/icons/profile_icon.svg'

const Tab = createBottomTabNavigator();

const AppTabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          height: 100,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 25,
        },
      }}>
      <Tab.Screen
        name="home"
        component={HomeStackNavigator}
        options={{
          tabBarIcon: ({focused, size}) => {
            let iconColor;

            if (focused) {
              iconColor = 'rgba(0,0,0,1)';
            } else {
              iconColor = 'rgba(0,0,0,0.4)';
            }

            return (
              <View>
                <View style={{alignSelf: 'center'}}>
                  <HomeIcon color={iconColor} />
                </View>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="calender"
        component={CalenderStackNavigator}
        options={{
          tabBarIcon: ({focused, size}) => {
            let iconColor;

            if (focused) {
              iconColor = 'rgba(0,0,0,1)';
            } else {
              iconColor = 'rgba(0,0,0,0.4)';
            }

            return (
              <View>
                <View style={{alignSelf: 'center'}}>
                  <CalendarIcon color={iconColor} />
                </View>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="add"
        component={add}
        options={{
          tabBarIcon: ({focused, size}) => {
            let iconColor;

            if (focused) {
              iconColor = 'rgba(0,0,0,1)';
            } else {
              iconColor = 'rgba(0,0,0,0.4)';
            }
            return (
              <View>
                <View
                  style={{
                    alignSelf: 'center',
                    height: 48,
                    width: 48,
                    backgroundColor: '#20304F',
                    justifyContent:'center',
                    alignItems:'center',
                    borderRadius:16
                  }}>
                  <PlusIcon color={iconColor} />
                </View>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="document"
        component={document}
        options={{
          tabBarIcon: ({focused, size}) => {
            let iconColor;

            if (focused) {
              iconColor = 'rgba(0,0,0,1)';
            } else {
              iconColor = 'rgba(0,0,0,0.4)';
            }

            return (
              <View>
                <View style={{alignSelf: 'center'}}>
                  <DocumentIcon color={iconColor} />
                </View>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="profile"
        component={profile}
        options={{
          tabBarIcon: ({focused, size}) => {
            let iconColor;

            if (focused) {
              iconColor = 'rgba(0,0,0,1)';
            } else {
              iconColor = 'rgba(0,0,0,0.4)';
            }

            return (
              <View>
                <View style={{alignSelf: 'center'}}>
                  <ProfileIcon color={iconColor} />
                </View>
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default AppTabNavigator;