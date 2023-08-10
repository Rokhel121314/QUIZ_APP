import {Button, SafeAreaView, Text, View} from 'react-native';
import React, {useState} from 'react';
import HomeScreen from './src/screens/HomeScreen';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return <HomeScreen />;
};

export default App;
