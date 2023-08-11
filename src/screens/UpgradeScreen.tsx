import {View, Text} from 'react-native';
import React from 'react';
import {RootStackScreenProps} from '../navigation/navigationType';

const UpgradeScreen = ({
  route,
  navigation,
}: RootStackScreenProps<'Upgrade'>) => {
  return (
    <View>
      <Text>UpgradeScreen</Text>
    </View>
  );
};

export default UpgradeScreen;
