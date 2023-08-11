import {View, Text} from 'react-native';
import React from 'react';
import {RootStackScreenProps} from '../navigation/navigationType';

const LoginScreen = ({route, navigation}: RootStackScreenProps<'Login'>) => {
  return (
    <View>
      <Text>LoginScreen</Text>
    </View>
  );
};

export default LoginScreen;
