import {View, Text, Alert, ActivityIndicator} from 'react-native';
import React, {useEffect, useState} from 'react';
import {RootStackScreenProps} from '../navigation/navigationType';
import Axios from 'axios';
import NavigationBackBtn from '../components/NavigationBackBtn';
import {decode} from 'html-entities';
import StyledText from '../components/StyledText';
import ChoiceItem from '../components/ChoiceItem';
import LargeBtn from '../components/LargeBtn';
import AsyncStorage from '@react-native-async-storage/async-storage';
import useStoreApiToken from '../hooks/useStoreApiToken';
import useShuffle from '../hooks/useShuffle';
import CountdownTimer from '../components/CountdownTimer';

export interface QuestionData {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

const QuiestionScreen = ({
  route,
  navigation,
}: RootStackScreenProps<'Question'>) => {
  //
  const [questionsData, setQuestionsData] = useState<QuestionData[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [stage, setStage] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [timer, setTimer] = useState(10);

  // questions[index] dictates current level and questions

  const category = route.params?.data?.category;
  const currentLevel = route.params?.data?.questions[stage].level;
  const question = decode(questionsData[currentQuestion]?.question);
  const incorrect_answer = questionsData[
    currentQuestion
  ]?.incorrect_answers.map(answers => decode(answers));
  const correct_answer = decode(questionsData[currentQuestion]?.correct_answer);
  const choices = [correct_answer, ...new Set(incorrect_answer)];
  const type = questionsData[currentQuestion]?.type;
  const QUESTIONAPI = route.params?.data?.questions[stage].questionApi;
  const bgColor = route.params?.data?.bgColor;
  const textColor = route.params?.data?.textColor;

  const {getApiToken, sessionToken, removeApiToken} = useStoreApiToken();
  const shuffle = useShuffle();

  // GETTING QUIZ DATA
  const getQuizData = async (): Promise<QuestionData | undefined> => {
    setIsLoading(true);
    try {
      await getApiToken();
      if (typeof QUESTIONAPI === 'string') {
        const {data} = await Axios.get(`${QUESTIONAPI}&token=${sessionToken}`);
        setQuestionsData(data.results);
      } else return;
    } catch (error) {
      console.log('error', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getQuizData();
    setCurrentQuestion(0);
  }, [stage]);

  const handlePickAnswer = (pickedAnswer: string) => {
    setTimeout(() => {
      if (pickedAnswer === correct_answer) {
        Alert.alert('CORRECT!');
        setTimeout(() => {
          handleNextQuestion();
        }, 2000);
      } else {
        Alert.alert('TRY HARDER NEXT TIME');
        setTimeout(() => {
          handleNextQuestion();
        }, 2000);
      }
    }, 500);
  };

  const handleNextQuestion = () => {
    if (currentQuestion >= 4) {
      setStage(stage + 1);
    } else setCurrentQuestion(currentQuestion + 1);
  };

  const newChoices = shuffle(type, choices);

  if (isLoading) {
    return (
      <View
        className="flex-1 justify-center items-center"
        style={{backgroundColor: bgColor}}>
        <ActivityIndicator size={'large'} color={'#000'} />
      </View>
    );
  }

  return (
    <View className="flex-1" style={{backgroundColor: bgColor}}>
      <View className="flex-row w-full px-5 justify-center mt-5">
        {/* CATEGORY AND CURRENT LEVEL */}
        {/* <NavigationBackBtn /> */}
        <StyledText
          textInput={category?.toUpperCase()}
          textStyle="text-4xl"
          color={textColor}
        />
      </View>

      {/* QUESTION STATUS */}
      <View className="w-full px-5 mt-6 flex-row justify-between">
        <StyledText
          textInput={`STAGE: ${currentLevel}`}
          textStyle="text-4xl"
          color={'#fff'}
        />
        <StyledText
          textInput={`Q: ${currentQuestion + 1}/${questionsData.length}`}
          textStyle="text-4xl"
          color="#fff"
        />
      </View>

      {/* QUESTION BOX */}
      <View className="w-full px-5 mt-16 relative">
        {/* TIMER CONTAINER*/}
        <CountdownTimer />
        {/* QUESTION CONTAINER */}
        <View className="rounded-2xl min-h-[200px] h-auto bg-white shadow-md shadow-black justify-center">
          <Text className="px-5 py-5 text-2xl text-black text-center">
            {question}
          </Text>
        </View>
      </View>

      {/* ANSWER CHOICES */}
      <View className="w-full px-5 mt-10">
        {newChoices.map((choice, index) => {
          return (
            <ChoiceItem
              choice={choice}
              key={index}
              onPress={handlePickAnswer}
            />
          );
        })}
      </View>
    </View>
  );
};

export default QuiestionScreen;
