import {View, Text} from 'react-native';
import React from 'react';
import {RootStackScreenProps} from '../navigation/navigationType';

const LeaderBoardScreen = ({
  route,
  navigation,
}: RootStackScreenProps<'Leaderboard'>) => {
  return (
    <View>
      <Text>LeaderBoardScreen</Text>
    </View>
  );
};

export default LeaderBoardScreen;
