import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import React from 'react';
import {RootStackScreenProps} from '../navigation/navigationType';

const HomeScreen = ({route, navigation}: RootStackScreenProps<'Home'>) => {
  console.log('test');

  const navigateToRegister = () => {
    navigation.navigate('Register');
  };

  const navigateToLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <View className="flex-1 bg-blue-400 justify-center items-center">
      <Text>THIS IS HOME SCREEN</Text>
      <TouchableOpacity
        onPress={navigateToRegister}
        className="bg-green-300 z-10">
        <Text className="bg-red-200 px-10 py-1">Register</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={navigateToLogin} className="bg-green-300 z-10">
        <Text className="bg-red-200 px-10 py-1">Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
