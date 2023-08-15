import {View, Text, SafeAreaView, Image, Pressable} from 'react-native';
import React from 'react';
import {RootStackScreenProps} from '../navigation/navigationType';
import NavigationBackBtn from '../components/NavigationBackBtn';
import {quizListData} from '../temp_data/quizListData';
import StyledText from '../components/StyledText';
import LargeBtn from '../components/LargeBtn';

const QuizIntroScreen = ({route, navigation}: RootStackScreenProps<'Quiz'>) => {
  //
  const subjectData = quizListData.filter(
    data => data.id === route.params?.data.id,
  );
  const bgColor = route.params?.data.bgColor;
  const catchPrahse = route.params?.data.catchPhrase;
  const category = route.params?.data.category.toUpperCase();
  const textColor = route.params?.data.textColor;
  const url = subjectData[0]?.url;

  const handleNavigation = () => {
    navigation.navigate('Question', {data: route.params?.data});
  };

  return (
    <SafeAreaView className="flex-1" style={{backgroundColor: `${bgColor}`}}>
      <View className="w-full mt-5 pl-5">
        <NavigationBackBtn />
      </View>

      <View className="w-full items-center mt-3">
        <StyledText
          textInput={'LEVEL 1-1'}
          textStyle={'text-5xl text-white'}
          color="#fff"
        />

        <StyledText
          textInput={category}
          textStyle="text-7xl mt-5 text-center"
          color={textColor}
        />
      </View>
      <View className="w-full items-center mt-5">
        <Image
          source={url}
          style={{width: 250, height: 250, resizeMode: 'contain'}}
        />
      </View>
      <View className="w-full items-center mt-5 px-10">
        <StyledText
          textInput={catchPrahse}
          textStyle="text-5xl text-gray-50 text-center"
          color="#fff"
        />
      </View>
      <View className="px-12 mt-20 w-full shadow-lg shadow-black">
        <LargeBtn onPress={handleNavigation} textInput="START" />
      </View>
    </SafeAreaView>
  );
};

export default QuizIntroScreen;
