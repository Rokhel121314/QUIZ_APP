import {View, Text} from 'react-native';
import React from 'react';
import {RootStackScreenProps} from '../navigation/navigationType';

const RegisterScreen = ({
  route,
  navigation,
}: RootStackScreenProps<'Register'>) => {
  return (
    <View>
      <Text>RegisterScreen</Text>
    </View>
  );
};

export default RegisterScreen;
