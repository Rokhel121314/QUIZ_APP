import {TouchableOpacity, Text} from 'react-native';
import React from 'react';

const ChoiceItem = ({
  correct_answer,
  choice,
  btnColor,
  correctBtnColor,
  pickedAnswer,
  disabled,
  handleBtnColor,
}: {
  correct_answer: string;
  choice: string;
  btnColor: string;
  correctBtnColor: string;
  pickedAnswer: string;
  disabled: boolean;
  handleBtnColor: (picked: string) => void;
}) => {
  //

  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={() => {
        handleBtnColor(choice);
      }}
      style={{
        backgroundColor:
          choice === correct_answer
            ? correctBtnColor
            : choice === pickedAnswer
            ? btnColor
            : 'white',
      }}
      className="w-full mb-3 bg-white min-h-[60px] h-auto rounded-2xl justify-center border-2 border-gray-300">
      <Text className="pl-7 pr-5 py-2 text-black text-xl">{choice}</Text>
    </TouchableOpacity>
  );
};

export default ChoiceItem;
