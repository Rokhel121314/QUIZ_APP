import {View, Text, Alert} from 'react-native';
import React, {useState, useEffect} from 'react';

const CountdownTimer = ({
  currentQuestion,
  answered,
  handleNextQuestion,
}: {
  currentQuestion: number;
  answered: boolean;
  handleNextQuestion: () => void;
}) => {
  const [timer, setTimer] = useState(15);

  //
  let interval: NodeJS.Timer;
  useEffect(() => {
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer(timer - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
    if (timer === 0) {
      // Alert.alert('TIMES UP!');
      setTimeout(() => {
        handleNextQuestion();
      }, 2000);
    }
  }, [timer]);

  // stop timer

  const stopTimer = () => {
    clearInterval(interval);
  };

  // reset timer
  useEffect(() => {
    setTimer(1000);
  }, [currentQuestion]);

  return (
    <View className="w-16 h-16 p-1 rounded-full shadow shadow-black absolute bg-white z-10 -top-8 justify-center items-center inset-0 left-[48%]">
      <View className="w-full h-full bg-blue-500 rounded-full justify-center items-center p-1">
        <View className="w-full h-full bg-white rounded-full justify-center items-center">
          <Text className="text-xl text-black">{timer}</Text>
        </View>
      </View>
    </View>
  );
};

export default CountdownTimer;
