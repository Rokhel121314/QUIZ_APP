import {View, Text} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';

type Props = {
  focused: boolean;
  routeName: string;
  iconName: string;
};

const TabBarIcon = ({focused, routeName, iconName}: Props) => {
  return (
    <View className="items-center justify-center flex-col">
      <Feather name={iconName} size={25} color={focused ? '#000' : '#d1d1d1'} />
      <Text
        className={`text-sm ${
          focused ? 'text-gray-950 font-bold' : 'text-gray-400'
        }`}>
        {routeName}
      </Text>
    </View>
  );
};

export default TabBarIcon;
