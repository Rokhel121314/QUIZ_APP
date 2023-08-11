import {View, Text} from 'react-native';
import React from 'react';

const TabBarIcon = ({
  focused,
  routeName,
}: {
  focused: boolean;
  routeName: string;
}) => {
  return (
    <View className="items-center justify-center">
      <Text
        className={`text-sm ${focused ? 'text-gray-950' : 'text-gray-400'}`}>
        {routeName}
      </Text>
    </View>
  );
};

export default TabBarIcon;
