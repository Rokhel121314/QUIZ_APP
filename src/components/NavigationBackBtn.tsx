import {Pressable, Text} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {UseNavigationProp} from '../navigation/navigationType';

const NavigationBackBtn = () => {
  const navigation = useNavigation<UseNavigationProp<'Quiz'>>();
  return (
    <Pressable
      onPress={() => navigation.goBack()}
      className="w-20 h-10 mt-5 ml-5 bg-green-500 items-center justify-center shadow-lg shadow-black"
      style={{
        borderTopLeftRadius: 50,
        borderBottomLeftRadius: 50,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
      }}>
      <Text className="text-lg font-bold text-gray-50">BACK</Text>
    </Pressable>
  );
};

export default NavigationBackBtn;
