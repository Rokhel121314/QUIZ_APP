import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import {RootStackScreenProps} from '../navigation/navigationType';
import Title from '../components/Title';
import RankAndPoints from '../components/RankAndPoints';

const ProfileScreen = ({
  route,
  navigation,
}: RootStackScreenProps<'Profile'>) => {
  return (
    <SafeAreaView className="flex-1 px-5">
      <Title mainText="Hi, Jerick!" subText="Lets make this day productive!" />
      <RankAndPoints />
    </SafeAreaView>
  );
};

export default ProfileScreen;
