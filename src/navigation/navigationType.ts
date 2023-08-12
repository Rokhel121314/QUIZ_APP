import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

//types import
import {QuizListData} from '../types/types';

// Stack navigator Root stack param list type
export type RootStackParamsList = {
  BottomTab: undefined;
  Login: undefined;
  Register: undefined;
  Home: undefined;
  Quiz: {data: QuizListData} | undefined;
  Leaderboard: undefined;
  Profile: undefined;
  Upgrade: undefined;
};

// STACK SCREEN PROPS
export type RootStackScreenProps<T extends keyof RootStackParamsList> =
  NativeStackScreenProps<RootStackParamsList, T>;

// USE NAVIGATION PROPS
export type UseNavigationProp<T extends keyof RootStackParamsList> =
  NativeStackNavigationProp<RootStackParamsList, T>;
