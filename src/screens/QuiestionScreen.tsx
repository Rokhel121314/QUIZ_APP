import {View, Text, Alert, ActivityIndicator} from 'react-native';
import React, {useEffect, useState} from 'react';
import {RootStackScreenProps} from '../navigation/navigationType';
import Axios from 'axios';
import NavigationBackBtn from '../components/NavigationBackBtn';
import {decode} from 'html-entities';
import StyledText from '../components/StyledText';
import ChoiceItem from '../components/ChoiceItem';
import LargeBtn from '../components/LargeBtn';

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
  const [isLoading, setIsLoading] = useState(true);

  // questions[index] dictates current level and questions

  const category = route.params?.data?.category;
  const currentLevel = route.params?.data?.questions[4].level;
  const question = decode(questionsData[currentQuestion]?.question);
  const incorrect_answer = questionsData[
    currentQuestion
  ]?.incorrect_answers.map(answers => decode(answers));
  const correct_answer = decode(questionsData[currentQuestion]?.correct_answer);
  const choices = [correct_answer, ...new Set(incorrect_answer)];
  const type = questionsData[currentQuestion]?.type;
  const QUESTIONAPI = route.params?.data?.questions[4].questionApi;
  const bgColor = route.params?.data?.bgColor;
  const textColor = route.params?.data?.textColor;

  // console.log('type', type);
  // console.log('currenLevels', currentLevel);
  // console.log('question', question);
  // console.log('choices', choices);
  // console.log('correct_answer', correct_answer);
  // console.log('isLoading', isLoading);

  const getQuizData = async (): Promise<QuestionData | undefined> => {
    setIsLoading(true);
    try {
      if (typeof QUESTIONAPI === 'string') {
        const {data} = await Axios.get(QUESTIONAPI);
        setQuestionsData(data.results);
      } else {
        return;
      }
    } catch (error) {
      console.log('error', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handlePickAnswer = (pickedAnswer: string) => {
    setTimeout(() => {
      if (pickedAnswer === correct_answer) {
        Alert.alert('CORRECT!');
        setTimeout(() => {
          handleNextQuestion();
        }, 3000);
      } else {
        Alert.alert('TRY HARDER NEXT TIME');
      }
    }, 1000);
  };

  const shuffle = (choice: string[]) => {
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

  const handleNextQuestion = () => {
    if (currentQuestion >= 4) {
      setCurrentQuestion(0);
    } else setCurrentQuestion(currentQuestion + 1);
  };

  const newChoices = shuffle(choices);

  useEffect(() => {
    getQuizData();
  }, []);

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
      <View className="flex-row w-full px-5 justify-between mt-5">
        {/* CATEGORY AND CURRENT LEVEL */}
        <NavigationBackBtn />
        <StyledText
          textInput={category?.toUpperCase()}
          textStyle="text-4xl"
          color={textColor}
        />
        <StyledText
          textInput={`${currentLevel}`}
          textStyle="text-4xl"
          color={'#fff'}
        />
      </View>

      {/* QUESTION STATUS */}
      <View className="w-full px-5 mt-6">
        <StyledText
          textInput={`${currentQuestion + 1}/${questionsData.length}`}
          textStyle="text-4xl text-center"
          color="#fff"
        />
      </View>

      {/* QUESTION BOX */}
      <View className="w-full px-5 mt-16 relative">
        {/* TIMER CONTAINER*/}
        <View className="w-16 h-16 p-1 rounded-full shadow shadow-black absolute bg-white z-10 -top-8 justify-center items-center inset-0 left-[48%]">
          <View className="w-full h-full bg-blue-500 rounded-full justify-center items-center p-1">
            <View className="w-full h-full bg-white rounded-full justify-center items-center">
              <Text className="text-xl text-black">30</Text>
            </View>
          </View>
        </View>
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
