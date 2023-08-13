import {View, Text, Button, Pressable} from 'react-native';
import React, {useEffect, useState} from 'react';
import {RootStackScreenProps} from '../navigation/navigationType';
import Axios from 'axios';
import NavigationBackBtn from '../components/NavigationBackBtn';
import StyledText from '../components/StyledText';
import {quizListData} from '../temp_data/quizListData';

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
  const [currentLevel, setCurrentLevel] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const category = route.params?.data?.category;
  const currentLevels = route.params?.data?.questions[0].level;
  const question = questionsData[currentQuestion]?.question;
  const incorrect_answer = questionsData[
    currentQuestion
  ]?.incorrect_answers.map(answers => answers);
  const correct_answer = questionsData[currentQuestion]?.correct_answer;
  const choices = [correct_answer, ...new Set(incorrect_answer)];
  const type = questionsData[currentQuestion]?.type;
  const QUESTIONAPI = route.params?.data?.questions[0].questionApi;

  console.log('type', type);
  console.log('currenLevels', currentLevels);
  console.log('question', question);
  console.log('choices', choices);
  console.log('correct_answer', correct_answer);

  const getQuizData = async () => {
    try {
      if (typeof QUESTIONAPI === 'string') {
        const {data} = await Axios.get(QUESTIONAPI);
        setQuestionsData(data.results);
      } else {
        return;
      }
    } catch (error) {
      console.log('error', error);
    }
  };

  const handlePickAnswer = (pickedAnswer: string) => {
    if (pickedAnswer === correct_answer) {
      console.log("YOU'RE CORRECT!!");
    } else {
      console.log('TRY AGAIN!!');
    }
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

  return (
    <View className="flex-1">
      <NavigationBackBtn />
      <Text>{category}</Text>
      <Text>{`LEVEL ${currentLevels}`}</Text>
      <Text>{`${1}/${questionsData.length}`}</Text>
      <Text className="text-3xl">{question}</Text>
      {newChoices.map(choice => {
        return (
          <Pressable
            onPress={() => handlePickAnswer(choice)}
            key={choice}
            className="bg-green-100 mt-2">
            <Text className="text-3xl">{choice}</Text>
          </Pressable>
        );
      })}

      <Button title="next" onPress={handleNextQuestion} />
    </View>
  );
};

export default QuiestionScreen;
