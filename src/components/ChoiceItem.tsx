import {TouchableOpacity, Text} from 'react-native';
import React from 'react';

const ChoiceItem = ({
  choice,
  onPress,
}: {
  choice: string;
  onPress: (pickedAnswer: string) => void;
}) => {
  return (
    <TouchableOpacity
      onPress={() => onPress(choice)}
      className="w-full mb-3 bg-white h-14 rounded-2xl justify-center border-2 border-gray-300">
      <Text className="pl-7 pr-1 text-black text-xl">{choice}</Text>
    </TouchableOpacity>
  );
};

export default ChoiceItem;
