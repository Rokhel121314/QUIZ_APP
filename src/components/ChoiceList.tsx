import {View, Text} from 'react-native';
import React, {useState} from 'react';
import ChoiceItem from './ChoiceItem';

const ChoiceList = ({
  newChoices,
  correct_answer,
}: {
  newChoices: string[];
  correct_answer: string;
}) => {
  const [btnColor, setBtnColor] = useState('white');
  const [correctBtnColor, setCorrectBtnColor] = useState('white');
  const [pickedAnswer, setPickedAnswer] = useState('');
  const [disabled, setDisabled] = useState(false);

  const handleBtnColor = (picked: string) => {
    setBtnColor('yellow');
    setDisabled(true);

    setPickedAnswer(picked);
    if (picked === correct_answer) {
      setCorrectBtnColor('yellow');
      setTimeout(() => {
        setBtnColor('green');
        setCorrectBtnColor('green');
      }, 2000);
    } else {
      setTimeout(() => {
        setBtnColor('red');
        setCorrectBtnColor('green');
      }, 2000);
    }
  };
  return (
    <View className="w-full px-5 mt-10">
      {newChoices.map((choice, index) => {
        return (
          <ChoiceItem
            correct_answer={correct_answer}
            handleBtnColor={handleBtnColor}
            btnColor={btnColor}
            pickedAnswer={pickedAnswer}
            correctBtnColor={correctBtnColor}
            choice={choice}
            disabled={disabled}
            key={index}
          />
        );
      })}
    </View>
  );
};

export default ChoiceList;
