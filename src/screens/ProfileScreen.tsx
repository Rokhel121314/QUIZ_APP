import {View, Text} from 'react-native';
import React from 'react';
import {RootStackScreenProps} from '../navigation/navigationType';

const ProfileScreen = ({
  route,
  navigation,
}: RootStackScreenProps<'Profile'>) => {
  return (
    <View>
      <Text>ProfileScreen</Text>
    </View>
  );
};

export default ProfileScreen;
