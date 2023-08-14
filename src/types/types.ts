import {Image as DefaultImage, ImageProps} from 'react-native';

// QUIZLIST DATA TYPE
export type QuizListData = {
  id: number;
  category: string;
  url: ImageProps;
  textColor: string;
  bgColor: string;
  catchPhrase: string;
  questions: Questions[];
};

export type Questions = {
  difficulty: string;
  level: string;
  questionApi: string;
};
