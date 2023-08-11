import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {RootStackParamsList} from './navigationType';

// Tab screens
import QuizSelectScreen from '../screens/QuizSelectScreen';
import LeaderBoardScreen from '../screens/LeaderBoardScreen';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
//TAB BAR
import TabBar from '../components/TabBar';
import TabBarIcon from '../components/TabBarIcon';

const Tab = createBottomTabNavigator<RootStackParamsList>();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      // tabBar={props => <TabBar {...props} />}
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
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <TabBarIcon focused={focused} routeName="Home" />
          ),
        }}
      />
      <Tab.Screen
        name="Quiz"
        component={QuizSelectScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <TabBarIcon focused={focused} routeName="Quiz" />
          ),
        }}
      />
      <Tab.Screen
        name="Leaderboard"
        component={LeaderBoardScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <TabBarIcon focused={focused} routeName="Rankings" />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <TabBarIcon focused={focused} routeName="Profile" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
