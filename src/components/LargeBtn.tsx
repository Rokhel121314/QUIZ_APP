import {View, Text, Pressable} from 'react-native';

import React from 'react';
import StyledText from './StyledText';

const LargeBtn = ({
  onPress,
  textInput,
}: {
  onPress: () => void;
  textInput: string;
}) => {
  return (
    <Pressable
      onPress={() => onPress()}
      className="h-16 bg-green-500 items-center justify-center  rounded-2xl shadow-lg shadow-black">
      <StyledText
        textInput={textInput}
        textStyle="text-5xl font-semibold text-gray-50"
        color="#fff"
      />
    </Pressable>
  );
};

export default LargeBtn;
