import {View, Text} from 'react-native';
import React from 'react';

const StyledText = ({
  textInput,
  textStyle,
  color,
}: {
  textInput: string | undefined;
  textStyle: string;
  color: string | undefined;
}) => {
  return (
    <Text
      className={`${textStyle} font-handjet-semibold`}
      style={{
        textShadowColor: 'rgba(0, 0, 0, .5)',
        textShadowOffset: {width: 3, height: 3},
        textShadowRadius: 15,
        letterSpacing: 5,
        color: `${color}`,
      }}>
      {textInput}
    </Text>
  );
};

export default StyledText;
