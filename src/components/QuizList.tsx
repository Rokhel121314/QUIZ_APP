import {View, Text, ScrollView, FlatList} from 'react-native';
import React from 'react';
import {ListRenderItem} from 'react-native';
import QuizListItem from './QuizListItem';
import {QuizListData} from '../types/types';
import {quizListData} from '../temp_data/quizListData';

const QuizList = () => {
  const renderItem: ListRenderItem<QuizListData> = ({item, index}) => (
    <QuizListItem data={item} index={index} />
  );
  return (
    <View className="flex-1 items-center">
      <FlatList
        data={quizListData}
        renderItem={renderItem}
        keyExtractor={(item: QuizListData) => item.id.toString()}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View className="h-5" />}
        ListFooterComponent={() => <View className="w-full h-5" />}
      />
    </View>
  );
};

export default QuizList;
