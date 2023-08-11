import type {NativeStackScreenProps} from '@react-navigation/native-stack';

// Stack navigator Root stack param list type
export type RootStackParamsList = {
  BottomTab: undefined;
  Login: undefined;
  Register: undefined;
  Home: undefined;
  Quiz: undefined;
  Leaderboard: undefined;
  Profile: undefined;
  Upgrade: undefined;
};

export type RootStackScreenProps<T extends keyof RootStackParamsList> =
  NativeStackScreenProps<RootStackParamsList, T>;
