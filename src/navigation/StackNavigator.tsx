import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import {RootStackParamsList} from './navigationType';
import ProfileScreen from '../screens/ProfileScreen';
import LeaderBoardScreen from '../screens/LeaderBoardScreen';
import UpgradeScreen from '../screens/UpgradeScreen';
import QuizIntroScreen from '../screens/QuizIntroScreen';
import QuiestionScreen from '../screens/QuiestionScreen';

const Stack = createNativeStackNavigator<RootStackParamsList>();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="BottomTab">
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Quiz"
        component={QuizIntroScreen}
        // initialParams={{
        //   data: {
        //     id: 1,
        //     category: 'math',
        //     url: require('../../assets/quiz_category_icons/sports.png'),
        //   },
        // }}
        options={({route}) => ({
          title: route.params?.data.category.toUpperCase(),
          headerShown: false,
        })}
      />
      <Stack.Screen
        name="Question"
        component={QuiestionScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Leaderboard" component={LeaderBoardScreen} />
      <Stack.Screen name="Upgrade" component={UpgradeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
