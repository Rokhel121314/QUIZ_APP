import {View, Text} from 'react-native';
import React from 'react';

type Props = {
  mainText: string;
  subText: string;
};
const SubTitle = ({mainText, subText}: Props) => {
  return (
    <View className="h-16 flex-row justify-between items-center mt-10">
      <View>
        <Text className="text-3xl font-semibold text-gray-950">{mainText}</Text>
        <Text className="text-sm font-semibold">{subText}</Text>
      </View>
    </View>
  );
};

export default SubTitle;
