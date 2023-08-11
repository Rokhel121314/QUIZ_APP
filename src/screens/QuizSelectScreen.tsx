import {View, Text} from 'react-native';
import React from 'react';
import {RootStackScreenProps} from '../navigation/navigationType';

const QuizSelectScreen = ({
  route,
  navigation,
}: RootStackScreenProps<'Quiz'>) => {
  return (
    <View>
      <Text>QuizSelectScreen</Text>
    </View>
  );
};

export default QuizSelectScreen;
