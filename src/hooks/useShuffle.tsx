import {View, Text} from 'react-native';
import React, {useState} from 'react';

const useShuffle = () => {
  //   const [value, setValue] = useState('');

  const shuffle = (type: string, choice: string[]) => {
    if (type === 'boolean') {
      return (choice = ['True', 'False']);
    } else {
      for (let i = choice.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [choice[i], choice[j]] = [choice[j], choice[i]];
      }
      return choice;
    }
  };

  return shuffle;
};

export default useShuffle;
