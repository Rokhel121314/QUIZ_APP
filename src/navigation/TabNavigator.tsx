import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {RootStackParamsList} from './navigationType';

// Tab screens
import QuizSelectScreen from '../screens/QuizIntroScreen';
import LeaderBoardScreen from '../screens/LeaderBoardScreen';
import ProfileScreen from '../screens/ProfileScreen';
import UpgradeScreen from '../screens/UpgradeScreen';

import TabBarIcon from '../components/TabBarIcon';

const Tab = createBottomTabNavigator<RootStackParamsList>();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 5,
          backgroundColor: 'rgba(255,255,255, 1)',
          borderRadius: 30,
          height: 60,
          shadowColor: '#7f5df0',
          shadowOffset: {
            width: 0,
            height: 10,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.5,
        },
      }}>
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <TabBarIcon focused={focused} routeName="Profile" iconName="user" />
          ),
        }}
      />

      <Tab.Screen
        name="Quiz"
        component={QuizSelectScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <TabBarIcon
              focused={focused}
              routeName="Quiz"
              iconName="help-circle"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Leaderboard"
        component={LeaderBoardScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <TabBarIcon
              focused={focused}
              routeName="Rankings"
              iconName="bar-chart-2"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Upgrade"
        component={UpgradeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <TabBarIcon
              focused={focused}
              routeName="Upgrades"
              iconName="chevrons-up"
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
