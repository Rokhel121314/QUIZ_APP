import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import {RootStackScreenProps} from '../navigation/navigationType';
import Title from '../components/Title';
import RankAndPoints from '../components/RankAndPoints';
import SubTitle from '../components/SubTitle';
import QuizList from '../components/QuizList';

const ProfileScreen = ({
  route,
  navigation,
}: RootStackScreenProps<'Profile'>) => {
  return (
    <SafeAreaView className="flex-1 px-5 bg-white">
      <Title mainText="Hi, Jerick!" subText="Lets make this day productive!" />
      <RankAndPoints />
      <SubTitle mainText="Let's play" subText="" />
      <QuizList />
    </SafeAreaView>
  );
};

export default ProfileScreen;
