import {View, Text} from 'react-native';
import React from 'react';

type Props = {
  mainText: string;
  subText: string;
};
const Title = ({mainText, subText}: Props) => {
  return (
    <View className="h-16 flex-row justify-between items-center mt-10">
      <View>
        <Text className="text-3xl font-semibold text-gray-950">{mainText}</Text>
        <Text className="text-sm font-semibold">{subText}</Text>
      </View>
      <View className="h-16 w-16 rounded-full bg-red-200"></View>
    </View>
  );
};

export default Title;
