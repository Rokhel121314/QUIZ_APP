import {View, Text} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';

const RankAndPoints = () => {
  return (
    <View className="h-16 bg-white mt-8 rounded-2xl flex-row items-center justify-center shadow-lg shadow-black">
      <View className="flex-row items-center justify-center w-1/2">
        <View className="w-1/2 flex-row justify-end pr-5">
          <Icon name="trophy" size={38} color={'#F6C000'} />
        </View>
        <View className="w-1/2">
          <Text className="font-xs font-semibold">Ranking</Text>
          <Text className="text-blue-500 text-2xl font-semibold">500</Text>
        </View>
      </View>

      <View className="border-l h-12 border-gray-300"></View>

      <View className="flex-row items-center justify-center w-1/2">
        <View className="w-1/2 flex-row justify-end pr-5">
          <Icon name="dollar-sign" size={38} color={'#F6C000'} />
        </View>
        <View className="w-1/2">
          <Text className="font-xs font-semibold">Points</Text>
          <Text className="text-blue-500 text-2xl font-semibold">1200</Text>
        </View>
      </View>
    </View>
  );
};

export default RankAndPoints;
