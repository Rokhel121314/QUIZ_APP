import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import {RootStackScreenProps} from '../navigation/navigationType';
import NavigationBackBtn from '../components/NavigationBackBtn';

const QuizIntroScreen = ({route, navigation}: RootStackScreenProps<'Quiz'>) => {
  return (
    <SafeAreaView className="flex-1 bg-orange-300">
      <NavigationBackBtn />
      <View className="w-full items-center mt-3">
        <Text
          className="text-5xl font-extrabold text-gray-50"
          style={{
            textShadowColor: 'rgba(0, 0, 0, .5)',
            textShadowOffset: {width: 3, height: 3},
            textShadowRadius: 15,
            fontFamily: 'JetBrainsMono-Bold',
          }}>
          LEVEL 1
        </Text>
      </View>

      <Text>{route.params?.data.category}</Text>
    </SafeAreaView>
  );
};

export default QuizIntroScreen;
