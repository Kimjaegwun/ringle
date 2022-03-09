import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Contents from './Contents';

const Tab = createBottomTabNavigator();

const Main = () => {
  return (
    <Tab.Navigator
      initialRouteName="Contents"
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        name="Home"
        component={Contents}
        options={{
          tabBarLabel: '홈',
          tabBarIcon: () => {
            return (
              <Image
                source={require('../asset/icons/home.png')}
                style={styles.icon}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Education"
        component={Contents}
        options={{
          tabBarLabel: '1:1수업',
          tabBarIcon: () => {
            return (
              <Image
                source={require('../asset/icons/education.png')}
                style={styles.icon}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Tutor"
        component={Contents}
        options={{
          tabBarLabel: '튜터',
          tabBarIcon: () => {
            return (
              <Image
                source={require('../asset/icons/tutor.png')}
                style={styles.icon}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Contents"
        component={Contents}
        options={{
          tabBarLabel: '콘텐츠',
          tabBarIcon: ({focused}) => {
            return (
              <Image
                source={
                  focused
                    ? require('../asset/icons/active-contents.png')
                    : require('../asset/icons/contents.png')
                }
                style={styles.icon}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Activity"
        component={Contents}
        options={{
          tabBarLabel: '학습 활동',
          tabBarIcon: () => {
            return (
              <Image
                source={require('../asset/icons/timer.png')}
                style={styles.icon}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default Main;

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
    
  },
});
